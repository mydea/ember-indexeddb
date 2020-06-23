import Service, { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';
import { typeOf as getTypeOf } from '@ember/utils';
import { A as array } from '@ember/array';
import { task, timeout } from 'ember-concurrency';
import { log } from 'ember-indexeddb/utils/log';
import Dexie from 'dexie';
import { buildWaiter, waitForPromise } from '@ember/test-waiters';

const testWaiter = buildWaiter('ember-indexeddb');

/**
 * This service allows interacting with an IndexedDB database.
 *
 * @module Services
 * @class IndexedDb
 * @extends Ember.Service
 * @public
 */
export default class IndexedDbService extends Service {
  @service store;
  @service indexedDbConfiguration;

  /**
   * The actual Dexie database.
   *
   * @property db
   * @type {Dexie}
   * @public
   */
  db;

  /**
   * The database name to use.
   * Overwrite this if you want to use something different.
   *
   * @property databaseName
   * @type {String}
   * @default 'ember-indexeddb'
   * @public
   */
  databaseName = 'ember-indexeddb';

  /**
   * This is an object with an array per model type.
   * It holds all the objects per model type that should be bulk saved.
   * After actually saving, this will be cleared.
   *
   * @property _saveQueue
   * @type {Object}
   * @private
   */
  _saveQueue = {};

  /**
   * This is the test waiter used to ensure all promises are resolved in tests.
   * This is set by the this._registerTestWaiter() method.
   *
   * @property _testWaiter
   * @type {Function}
   * @private
   */
  _testWaiter;

  /**
   * This is a promise that is used for bulk saving.
   * All bulkSave() operations use and return the same promise, which is cached here.
   *
   * @property _savePromise
   * @type {Promise}
   * @private
   */
  _savePromise;

  /**
   * All currently running promises are temporarily saved here.
   * This is used to check if there are running transactions.
   *
   * @property _promiseQueue
   * @type {Promise[]}
   * @private
   */
  _promiseQueue = array();

  /**
   * e.g. MS Edge doesn't support compound indices.
   * For these cases, querying shouldn't try to use them.
   *
   * @property _supportsCompoundIndicies
   * @type {Boolean}
   * @readOnly
   * @private
   */
  _supportsCompoundIndices = true;

  /**
   * Call this and wait until it resolves before doing anything with IndexedDB!
   * This should be done in beforeModel() on the application route.
   * It will reject if IndexedDB is not available.
   *
   * Also available as a task: `indexedDb.setupTask.perform()`
   *
   * @method setup
   * @return {Promise}
   * @public
   */
  setup() {
    this.setupTask.perform();
  }

  @task(function* () {
    if (this.db) {
      return this.db;
    }

    let testWaiterToken = testWaiter.beginAsync();

    let db = new Dexie(this.databaseName);

    let { indexedDbConfiguration } = this;
    indexedDbConfiguration.setupDatabase(db);

    set(this, 'db', db);

    yield openDb(db);

    testWaiter.endAsync(testWaiterToken);

    return db;
  })
  setupTask;

  /**
   * Query indexedDB.
   * This uses _buildQuery under the hood.
   * This resolved to an array.
   *
   * @method query
   * @param {String} type The model type to query
   * @param {Object} query The query data
   * @return {Promise[]}
   * @public
   */
  query(type, query) {
    let queryPromise = this._buildQuery(type, query);
    let promise = new Promise(
      (resolve, reject) => queryPromise.toArray().then(resolve, reject),
      'indexedDb/query'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Query indexedDB.
   * This uses _buildQuery under the hood.
   * This resolved to an object.
   *
   * @method queryRecord
   * @param {String} type The model type to query
   * @param {Object} query The query data
   * @return {Promise}
   * @public
   */
  queryRecord(type, query) {
    let queryPromise = this._buildQuery(type, query);

    let promise = new Promise(
      (resolve, reject) => queryPromise.first().then(resolve, reject),
      'indexedDb/queryRecord'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Find one or multiple items by id.
   * If id is an array, this will try to fetch all of these objects and resolve with an array.
   * Otherwise, it will resolve with an object.
   *
   * @method find
   * @param {String} type The model type to find
   * @param {String|String[]} id One or multiple ids to fetch
   * @return {Promise}
   * @public
   */
  find(type, id) {
    let { db } = this;

    if (getTypeOf(id) === 'array') {
      return db[type].where('id').anyOf(id.map(this._toString)).toArray();
    }

    let promise = new Promise(
      (resolve, reject) =>
        db[type].get(this._toString(id)).then(resolve, reject),
      'indexedDb/find'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Find all of a given type.
   *
   * @method findAll
   * @param {String} type The model type to find.
   * @return {Promise}
   * @public
   */
  findAll(type) {
    let { db } = this;

    let promise = new Promise(
      (resolve, reject) => db[type].toArray().then(resolve, reject),
      'indexedDb/findAll'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Add one or multiple items to the database.
   *
   * @method add
   * @param {String} type The model type to add
   * @param {Object|Object[]} items One or multiple objects to add to the database.
   * @return {Promise}
   * @public
   */
  add(type, items) {
    let { db } = this;

    // Single Item?
    if (getTypeOf(items) !== 'array') {
      items = array([items]);
    }

    let data = items.map((item) => {
      return this._mapItem(type, item);
    });

    let promise = new Promise(
      (resolve, reject) => db[type].bulkPut(data).then(resolve, reject),
      'indexedDb/add'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Save/update an item.
   *
   * @method save
   * @param {String} type The model type of the object
   * @param {String} id The id of the object
   * @param {Object} item The serialized object to save.
   * @return {Promise}
   * @public
   */
  save(type, id, item) {
    let { db } = this;

    let data = this._mapItem(type, item);
    let promise = new Promise(
      (resolve, reject) => db[type].put(data).then(resolve, reject),
      'indexedDb/save'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * This will wait for 10ms and try to build a queue, and save everything at once if possible.
   *
   * @method saveBulk
   * @param {String} type The model type to save
   * @param {Object} item The data to save
   * @return {Promise}
   * @public
   */
  saveBulk(type, item) {
    let { _savePromise: savePromise, _saveQueue: saveQueue } = this;

    // If no save promise exists, create a new one
    if (!savePromise) {
      savePromise = new Promise((resolve, reject) => {
        later(
          this,
          () => {
            this._bulkSave().then((val) => {
              set(this, '_savePromise', null);
              resolve(val);
            }, reject);
          },
          100
        );
      }, 'indexedDb/saveBulk');
      set(this, '_savePromise', savePromise);
      this._addToPromiseQueue(savePromise);
    }

    let queue = saveQueue[type];
    if (!queue) {
      queue = array();
      saveQueue[type] = queue;
    }

    queue.pushObject(item);
    return savePromise;
  }

  /**
   * Clear a database table.
   *
   * @method clear
   * @param {String} type The model type to clear.
   * @return {Promise}
   * @public
   */
  clear(type) {
    let { db } = this;

    let promise = new Promise(
      (resolve, reject) => db[type].clear().then(resolve, reject),
      'indexedDb/clear'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Delete one item.
   *
   * @method delete
   * @param {String} type The model type to delete
   * @param {String} id The id of the entry to delete
   * @return {Promise}
   * @public
   */
  delete(type, id) {
    let { db } = this;

    let promise = new Promise(
      (resolve, reject) => db[type].delete(id).then(resolve, reject),
      'indexedDb/delete'
    );

    this._addToPromiseQueue(promise);
    return promise;
  }

  /**
   * Drop the entire database.
   *
   * Also available as a task: `indexedDb.dropDatabaseTask.perform()`
   *
   * @method dropDatabase
   * @return {Promise}
   * @public
   */
  dropDatabase() {
    return this.dropDatabaseTask.perform();
  }

  @task(function* () {
    let { db } = this;

    if (!db) {
      return;
    }

    let testWaiterToken = testWaiter.beginAsync();

    // Ensure the db is open
    yield openDb(db);
    yield this.waitForQueueTask.perform();
    yield timeout(100);
    yield db.delete();
    yield closeDb(db);

    set(this, 'db', null);

    testWaiter.endAsync(testWaiterToken);
  })
  dropDatabaseTask;

  /**
   * Export a complete dump of the current database.
   * The output of this can be used to recreate the exact database state via this.importDatabase(config);
   *
   * Also available as a task: `indexedDb.exportDatabaseTask.perform()`
   *
   * @method exportDatabase
   * @return {Promise}
   * @public
   */
  exportDatabase() {
    let promise = this.exportDatabaseTask.perform();
    this._addToPromiseQueue(promise);
    return promise;
  }

  @task(function* () {
    let { db, databaseName, currentVersion: version } = this;

    let config = {
      databaseName,
      version,
      stores: {},
      data: {},
    };

    // Now, open database without specifying any version. This will make the database open any existing database and read its schema automatically.
    yield openDb(db);

    // Save the last version number
    set(config, 'version', db.verno);

    let promises = array();

    db.tables.forEach(function (table) {
      let primKeyAndIndexes = [table.schema.primKey].concat(
        table.schema.indexes
      );
      let schemaSyntax = primKeyAndIndexes
        .map(function (index) {
          return index.src;
        })
        .join(',');

      set(config.stores, table.name, schemaSyntax);

      let promise = table.each((object) => {
        let arr = config.data[table.name];

        if (!arr) {
          arr = array();
          set(config.data, table.name, arr);
        }

        arr.push(object);
      });

      promises.push(promise);
    });

    yield Promise.all(promises);
    return config;
  })
  exportDatabaseTask;

  /**
   * Import a complete database dump as created by this.exportDatabase()
   *
   * Also available as a task: `indexedDb.importDatabaseTask.perform()`
   *
   * @method importDatabase
   * @param {Object} config A configuration object as created by this.exportDatabase()
   * @return {Promise}
   * @public
   */
  importDatabase(config) {
    let promise = this.importDatabaseTask.perform(config);
    this._addToPromiseQueue(promise);
    return promise;
  }

  @task(function* (config) {
    let { databaseName, version, stores, data } = config;

    log('====================================');
    log('Importing database dump!');

    log('Dropping existing database...');
    yield this.dropDatabaseTask.perform();

    log(`Setting up database ${databaseName} in version ${version}...`);
    let db = new Dexie(databaseName);
    db.version(version).stores(stores);

    log('Opening database...');
    yield openDb(db);

    let tables = Object.keys(data);
    while (tables.length) {
      let table = tables.shift();
      log(`Importing ${data[table].length} rows for ${table}...`);
      yield db[table].bulkPut(data[table]);
    }

    // This is closed here, don't forget to call 'setup' again, to do eventually necessary migrations
    yield closeDb(db);

    log('Database import done!');
  })
  importDatabaseTask;

  /**
   * Wait for all queued objects ot be resolved.
   * This will resolve when there are no open processes anymore.
   *
   * Also available as a task: `indexedDb.waitForQueueTask.perform()`
   *
   * @method waitForQueue
   * @return {Promise}
   * @public
   */
  waitForQueue() {
    return this.waitForQueueTask.perform();
  }

  @task(function* () {
    while (this._promiseQueue.length > 0 || this._savePromise) {
      yield timeout(100);
    }
  })
  waitForQueueTask;

  /**
   * Get the queue and save everything in it in bulk.
   *
   * @method _bulkSave
   * @private
   */
  _bulkSave() {
    let { _saveQueue: saveQueue } = this;

    let promises = array();
    for (let i in saveQueue) {
      promises.push(this.add(i, saveQueue[i]));
      saveQueue[i] = array();
    }

    return Promise.all(promises, 'indexedDb/_bulkSave');
  }

  /**
   * Build a query for Dexie.
   *
   * This will try to find a matching index, and use it if possible.
   * It can also handle multi-indecies, if they have been specified and are supported.
   * If no matching index is found, it will fetch everything and try to filter it via JS.
   * Note that this is _much_ slower than querying by actual indecies, so you should definitely use that if possible!
   * If you are using multiple query arguments, and only one of them is found as index, it will query the database by this index
   * and then do the other queries via JS filter.
   *
   * Note that this will also auto-convert boolean query arguments to 1/0.
   *
   * @method _buildQuery
   * @param {String} type The model type to query
   * @param {Object} query The actual query
   * @return {Dexie.Collection}
   * @private
   */
  _buildQuery(type, query) {
    let { db, _supportsCompoundIndices: supportsCompoundIndices } = this;

    let keys = Object.keys(query);

    // Convert boolean queries to 1/0
    for (let i in query) {
      if (getTypeOf(query[i]) === 'boolean') {
        query[i] = query[i] ? 1 : 0;
      }
    }

    // Order of query params is important!
    let { schema } = db[type];
    let { indexes } = schema;

    // Only one, try to find a simple index
    if (keys.length === 1) {
      let key = keys[0];
      let index = indexes.find((index) => {
        let { keyPath } = index;
        return keyPath === key;
      });

      if (index) {
        return db[type].where(key).equals(query[key]);
      }
    }

    // try to find a fitting multi index
    // only if the client supports compound indices!
    if (supportsCompoundIndices) {
      let multiIndex = indexes.find((index) => {
        let { keyPath } = index;

        // If keyPath is not set, not an array or not the same length as the keys, it's not the correct one
        if (
          !keyPath ||
          getTypeOf(keyPath) !== 'array' ||
          keyPath.length !== keys.length
        ) {
          return false;
        }

        // If one of the keys is not in the keyPath, return false
        return !keys.find((key) => !keyPath.includes(key));
      });

      // If a multi index is found, use it
      if (multiIndex) {
        let { keyPath, name: keyName } = multiIndex;
        let compareValues = array();

        keyPath.forEach((key) => {
          compareValues.push(query[key]);
        });

        return db[type].where(keyName).equals(compareValues);
      }
    }

    // Else, filter manually
    return db[type].filter((item) => {
      return keys.every((key) => {
        return item.json.attributes[key] === query[key];
      });
    });
  }

  _mapItem(type, item) {
    let { indexedDbConfiguration } = this;

    return indexedDbConfiguration.mapItem(type, item);
  }

  _toString(val) {
    return `${val}`;
  }

  /**
   * Add a promise to the promise queue.
   * When the promise resolves or rejects, it will be removed from the promise queue.
   *
   * @method _addToPromiseQueue
   * @param {Promise} promise
   * @return {Promise}
   * @private
   */
  _addToPromiseQueue(promise) {
    let { _promiseQueue: promiseQueue } = this;

    let wrappedPromise = waitForPromise(promise);
    promiseQueue.pushObject(wrappedPromise);

    let removeObject = () => {
      promiseQueue.removeObject(wrappedPromise);
    };

    wrappedPromise.finally(removeObject);
    return wrappedPromise;
  }

  constructor() {
    super(...arguments);

    try {
      window.IDBKeyRange.only([1]);
    } catch (e) {
      this._supportsCompoundIndices = false;
    }
  }
}

async function openDb(db) {
  while (!db.isOpen()) {
    await db.open();
  }
  return db;
}

async function closeDb(db) {
  while (db.isOpen()) {
    await db.close();
  }
  return db;
}
