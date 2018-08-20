/* global Dexie */
import Service, { inject as service } from '@ember/service';
import { computed, set, get } from '@ember/object';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';
import { typeOf as getTypeOf } from '@ember/utils';
import { A as array } from '@ember/array';
import Ember from 'ember';
import { registerWaiter, unregisterWaiter } from 'ember-indexeddb/utils/test-waiter';
import { task, timeout } from 'ember-concurrency';

const {
  testing
} = Ember;

/**
 * This service allows interacting with an IndexedDB database.
 *
 * @module Services
 * @class IndexedDb
 * @extends Ember.Service
 * @public
 */
export default Service.extend({

  store: service(),
  indexedDbConfiguration: service(),

  /**
   * The actual Dexie database.
   *
   * @property db
   * @type {Dexie}
   * @public
   */
  db: null,

  /**
   * The database name to use.
   * Overwrite this if you want to use something different.
   *
   * @property databaseName
   * @type {String}
   * @default 'ember-indexeddb'
   * @public
   */
  databaseName: 'ember-indexeddb',

  /**
   * This is an object with an array per model type.
   * It holds all the objects per model type that should be bulk saved.
   * After actually saving, this will be cleared.
   *
   * @property _saveQueue
   * @type {Object}
   * @private
   */
  _saveQueue: null,

  /**
   * This is the test waiter used to ensure all promises are resolved in tests.
   * This is set by the this._registerTestWaiter() method.
   *
   * @property _testWaiter
   * @type {Function}
   * @private
   */
  _testWaiter: null,

  /**
   * This is a promise that is used for bulk saving.
   * All bulkSave() operations use and return the same promise, which is cached here.
   *
   * @property _savePromise
   * @type {RSVP.Promise}
   * @private
   */
  _savePromise: null,

  /**
   * All currently running promises are temporarily saved here.
   * This is used to check if there are running transactions.
   *
   * @property _promiseQueue
   * @type {RSVP.Promise[]}
   * @private
   */
  _promiseQueue: null,

  /**
   * e.g. MS Edge doesn't support compound indices.
   * For these cases, querying shouldn't try to use them.
   *
   * @property _supportsCompoundIndicies
   * @type {Boolean}
   * @readOnly
   * @private
   */
  _supportsCompoundIndices: computed(function() {
    try {
      window.IDBKeyRange.only([1]);
    } catch(e) {
      return false;
    }

    return true;
  }),

  /**
   * Call this and wait until it resolves before doing anything with IndexedDB!
   * This should be done in beforeModel() on the application route.
   * It will reject if IndexedDB is not available.
   *
   * Also available as a task: `indexedDb.setupTask.perform()`
   *
   * @method setup
   * @return {RSVP.Promise}
   * @public
   */
  setup() {
    return get(this, 'setupTask').perform();
  },
  setupTask: task(function* () {
    if (get(this, 'db')) {
      return get(this, 'db');
    }

    let testWaiter = function() {
      return false;
    };
    registerWaiter(testWaiter);

    let db = new window.Dexie(get(this, 'databaseName'));

    let dbConfiguration = get(this, 'indexedDbConfiguration');
    dbConfiguration.setupDatabase(db);

    set(this, 'db', db);

    yield openDb(db);

    unregisterWaiter(testWaiter);

    return db;
  }),

  /**
   * Query indexedDB.
   * This uses _buildQuery under the hood.
   * This resolved to an array.
   *
   * @method query
   * @param {String} type The model type to query
   * @param {Object} query The query data
   * @return {RSVP.Promise[]}
   * @public
   */
  query(type, query) {
    let queryPromise = this._buildQuery(type, query);
    let promise = new Promise((resolve, reject) => queryPromise.toArray().then(resolve, reject), 'indexedDb/query');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Query indexedDB.
   * This uses _buildQuery under the hood.
   * This resolved to an object.
   *
   * @method queryRecord
   * @param {String} type The model type to query
   * @param {Object} query The query data
   * @return {RSVP.Promise}
   * @public
   */
  queryRecord(type, query) {
    let queryPromise = this._buildQuery(type, query);
    let promise = new Promise((resolve, reject) => queryPromise.first().then(resolve, reject), 'indexedDb/queryRecord');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Find one or multiple items by id.
   * If id is an array, this will try to fetch all of these objects and resolve with an array.
   * Otherwise, it will resolve with an object.
   *
   * @method find
   * @param {String} type The model type to find
   * @param {String|String[]} id One or multiple ids to fetch
   * @return {RSVP.Promise}
   * @public
   */
  find(type, id) {
    let db = get(this, 'db');
    if (getTypeOf(id) === 'array') {
      return db[type].where('id').anyOf(id.map(this._toString)).toArray();
    }
    let promise = new Promise((resolve, reject) => db[type].get(this._toString(id)).then(resolve, reject), 'indexedDb/find');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Find all of a given type.
   *
   * @method findAll
   * @param {String} type The model type to find.
   * @return {RSVP.Promise}
   * @public
   */
  findAll(type) {
    let db = get(this, 'db');
    let promise = new Promise((resolve, reject) => db[type].toArray().then(resolve, reject), 'indexedDb/findAll');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Add one or multiple items to the database.
   *
   * @method add
   * @param {String} type The model type to add
   * @param {Object|Object[]} items One or multiple objects to add to the database.
   * @return {RSVP.Promise}
   * @public
   */
  add(type, items) {
    let db = get(this, 'db');

    // Single Item?
    if (getTypeOf(items) !== 'array') {
      items = array([items]);
    }

    let data = items.map((item) => {
      return this._mapItem(type, item);
    });

    let promise = new Promise((resolve, reject) => db[type].bulkPut(data).then(resolve, reject), 'indexedDb/add');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Save/update an item.
   *
   * @method save
   * @param {String} type The model type of the object
   * @param {String} id The id of the object
   * @param {Object} item The serialized object to save.
   * @return {RSVP.Promise}
   * @public
   */
  save(type, id, item) {
    let db = get(this, 'db');

    let data = this._mapItem(type, item);
    let promise = new Promise((resolve, reject) => db[type].put(data).then(resolve, reject), 'indexedDb/save');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * This will wait for 10ms and try to build a queue, and save everything at once if possible.
   *
   * @method saveBulk
   * @param {String} type The model type to save
   * @param {Object} item The data to save
   * @return {RSVP.Promise}
   * @public
   */
  saveBulk(type, item) {
    let savePromise = get(this, '_savePromise');
    let saveQueue = get(this, '_saveQueue');

    // If no save promise exists, create a new one
    if (!savePromise) {
      savePromise = new Promise((resolve, reject) => {
        later(this, () => {
          this._bulkSave().then((val) => {
            set(this, '_savePromise', null);
            resolve(val);
          }, reject);
        }, 100);
      }, 'indexedDb/saveBulk');
      set(this, '_savePromise', savePromise);
      this._addToPromiseQueue(savePromise);
    }

    let queue = get(saveQueue, type);
    if (!queue) {
      queue = [];
      saveQueue[type] = queue;
    }

    queue.pushObject(item);
    return savePromise;
  },

  /**
   * Clear a database table.
   *
   * @method clear
   * @param {String} type The model type to clear.
   * @return {RSVP.Promise}
   * @public
   */
  clear(type) {
    let db = get(this, 'db');
    let promise = new Promise((resolve, reject) => db[type].clear().then(resolve, reject), 'indexedDb/clear');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Delete one item.
   *
   * @method delete
   * @param {String} type The model type to delete
   * @param {String} id The id of the entry to delete
   * @return {RSVP.Promise}
   * @public
   */
  delete(type, id) {
    let db = get(this, 'db');
    let promise = new Promise((resolve, reject) => db[type].delete(id).then(resolve, reject), 'indexedDb/delete');

    this._addToPromiseQueue(promise);
    return promise;
  },

  /**
   * Drop the entire database.
   *
   * Also available as a task: `indexedDb.dropDatabaseTask.perform()`
   *
   * @method dropDatabase
   * @return {RSVP.Promise}
   * @public
   */
  dropDatabase() {
    return get(this, 'dropDatabaseTask').perform();
  },
  dropDatabaseTask: task(function* () {
    let db = get(this, 'db');

    if (!db) {
      return;
    }

    let testWaiter = function() {
      return false;
    };
    registerWaiter(testWaiter);

    // Ensure the db is open
    yield openDb(db);
    yield get(this, 'waitForQueueTask').perform();
    yield timeout(100);
    yield db.delete();
    yield closeDb(db);

    set(this, 'db', null);

    unregisterWaiter(testWaiter);
  }),

  /**
   * Export a complete dump of the current database.
   * The output of this can be used to recreate the exact database state via this.importDatabase(config);
   *
   * Also available as a task: `indexedDb.exportDatabaseTask.perform()`
   *
   * @method exportDatabase
   * @return {RSVP.Promise}
   * @public
   */
  exportDatabase() {
    let promise = get(this, 'exportDatabaseTask').perform();
    this._addToPromiseQueue(promise);
    return promise;
  },
  exportDatabaseTask: task(function* () {
    let db = get(this, 'db');

    let config = {
      databaseName: get(this, 'databaseName'),
      version: get(this, 'currentVersion'),
      stores: {},
      data: {}
    };

    // Now, open database without specifying any version. This will make the database open any existing database and read its schema automatically.
    yield openDb(db);

    // Save the last version number
    set(config, 'version', db.verno);

    let promises = [];

    db.tables.forEach(function(table) {
      let primKeyAndIndexes = [table.schema.primKey].concat(table.schema.indexes);
      let schemaSyntax = primKeyAndIndexes.map(function(index) {
        return index.src;
      }).join(',');

      set(config.stores, table.name, schemaSyntax);

      let promise = table.each((object) => {
        let arr = get(config.data, table.name);
        if (!arr) {
          arr = [];
          set(config.data, table.name, arr);
        }

        arr.push(object);
      });

      promises.push(promise);
    });

    yield Promise.all(promises);
    return config;
  }),

  /**
   * Import a complete database dump as created by this.exportDatabase()
   *
   * Also available as a task: `indexedDb.importDatabaseTask.perform()`
   *
   * @method importDatabase
   * @param {Object} config A configuration object as created by this.exportDatabase()
   * @return {RSVP.Promise}
   * @public
   */
  importDatabase(config) {
    let promise = get(this, 'importDatabaseTask').perform(config);
    this._addToPromiseQueue(promise);
    return promise;
  },
  importDatabaseTask: task(function* (config) {
    let {
      databaseName,
      version,
      stores,
      data
    } = config;

    let _log = (message) => {
      if (!testing) {
        /* eslint-disable no-console */
        console.log(message);
        /* eslint-disable no-console */
      }
    };

    _log('====================================');
    _log('Importing database dump!');

    _log('Dropping existing database...');
    yield get(this, 'dropDatabaseTask').perform();

    _log(`Setting up database ${databaseName} in version ${version}...`);
    let db = new Dexie(databaseName);
    db.version(version).stores(stores);

    _log('Opening database...');
    yield openDb(db);

    let tables = Object.keys(data);
    while (tables.length) {
      let table = tables.shift();
      _log(`Importing ${data[table].length} rows for ${table}...`);
      yield db[table].bulkPut(data[table]);
    }

    // This is closed here, don't forget to call 'setup' again, to do eventually necessary migrations
    yield closeDb(db);

    _log('Database import done!');
  }),

  /**
   * Wait for all queued objects ot be resolved.
   * This will resolve when there are no open processes anymore.
   *
   * Also available as a task: `indexedDb.waitForQueueTask.perform()`
   *
   * @method waitForQueue
   * @return {RSVP.Promise}
   * @public
   */
  waitForQueue() {
    return get(this, 'waitForQueueTask').perform();
  },
  waitForQueueTask: task(function* () {
    while (get(this, '_promiseQueue.length') || get(this, '_savePromise')) {
      yield timeout(100);
    }
  }),

  /**
   * Get the queue and save everything in it in bulk.
   *
   * @method _bulkSave
   * @private
   */
  _bulkSave() {
    let saveQueue = get(this, '_saveQueue');

    let promises = [];
    for (let i in saveQueue) {
      promises.push(this.add(i, saveQueue[i]));
      saveQueue[i] = [];
    }

    return Promise.all(promises, 'indexedDb/_bulkSave');
  },

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
    let db = get(this, 'db');
    let _supportsCompoundIndices = get(this, '_supportsCompoundIndices');

    let promise = null;
    let keys = Object.keys(query);

    // Convert boolean queries to 1/0
    for (let i in query) {
      if (getTypeOf(query[i]) === 'boolean') {
        query[i] = query[i] ? 1 : 0;
      }
    }

    // Only one, then do a simple where
    if (keys.length === 1) {
      /* eslint-disable ember-suave/prefer-destructuring */
      let key = keys[0];
      /* eslint-enable ember-suave/prefer-destructuring */
      return db[type].where(key).equals(query[key]);
    }

    // Order of query params is important!
    let { schema } = db[type];
    let { indexes } = schema;

    // try to find a fitting multi index
    // only if the client supports compound indices!
    if (_supportsCompoundIndices) {
      let multiIndex = indexes.find((index) => {
        let keyPath = get(index, 'keyPath');

        // If keyPath is not set, not an array or not the same length as the keys, it's not the correct one
        if (!keyPath || getTypeOf(keyPath) !== 'array' || keyPath.length !== keys.length) {
          return false;
        }

        // If one of the keys is not in the keyPath, return false
        return !keys.find((key) => !keyPath.includes(key));
      });

      // If a multi index is found, use it
      if (multiIndex) {
        let keyPath = get(multiIndex, 'keyPath');
        let compareValues = [];
        keyPath.forEach((key) => {
          compareValues.push(query[key]);
        });

        let keyName = get(multiIndex, 'name');
        return db[type].where(keyName).equals(compareValues);
      }
    }

    // Else, filter manually
    Object.keys(query).forEach((i) => {
      if (!promise) {
        promise = db[type].where(i).equals(query[i]);
      } else {
        promise = promise.and((item) => get(item, i) === query[i]);
      }
    });

    return promise;
  },

  _mapItem(type, item) {
    let dbConfiguration = get(this, 'indexedDbConfiguration');
    return dbConfiguration.mapItem(type, item);
  },

  _toString(val) {
    return `${val}`;
  },

  /**
   * Add a promise to the promise queue.
   * When the promise resolves or rejects, it will be removed from the promise queue.
   *
   * @method _addToPromiseQueue
   * @param {RSVP.Promise} promise
   * @return {RSVP.Promise}
   * @private
   */
  _addToPromiseQueue(promise) {
    let promiseQueue = get(this, '_promiseQueue');
    promiseQueue.pushObject(promise);

    let removeObject = () => {
      promiseQueue.removeObject(promise);
    };
    promise.finally(removeObject);
    return promise;
  },

  /**
   * Register the test waiter.
   * This waiter checks if there are no promises left in the _promiseQueue.
   *
   * @method _registerTestWaiter
   * @private
   */
  _registerTestWaiter() {
    let testWaiter = () => {
      return get(this, '_promiseQueue.length') === 0;
    };
    registerWaiter(testWaiter);
    set(this, '_testWaiter', testWaiter);
  },

  /**
   * This removes the test waiter.
   *
   * @method _unregisterTestWaiter
   * @private
   */
  _unregisterTestWaiter() {
    let testWaiter = get(this, '_testWaiter');
    unregisterWaiter(testWaiter);
  },

  init() {
    this._super(...arguments);
    set(this, '_saveQueue', {});
    set(this, '_promiseQueue', array([]));

    this._registerTestWaiter();
  },

  willDestroy() {
    this._unregisterTestWaiter();
    this._super(...arguments);
  }

});

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
