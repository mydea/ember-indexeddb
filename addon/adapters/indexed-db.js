import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { A as array } from '@ember/array';
import { cloneDeep } from 'ember-indexeddb/utils/clone-deep';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

/**
 *
 * This Ember-Data adapter will fetch and save all data to/from IndexedDB.
 *
 * @module Ember Data
 * @class IndexedDbAdapter
 * @extends DS.JSONAPIAdapter
 * @public
 */
export default class IndexedDbAdapter extends JSONAPIAdapter {
  @service indexedDb;

  /**
   * Coalesce all find requests.
   *
   * @property coalesceFindRequests
   * @type {Boolean}
   * @default true
   * @protected
   */
  coalesceFindRequests = true;

  /**
   * Set this to true to log durations of IndexedDB operations to the console.
   *
   * @property _shouldLogDurations
   * @type {Boolean}
   * @default false
   * @private
   */
  _shouldLogDurations = false;

  /**
   * This function will generate a GUID to be used in IndexedDB.
   *
   * @method generateIdForRecord
   * @return {String}
   * @protected
   */
  generateIdForRecord() {
    return Math.random().toString(32).slice(2).substr(0, 8);
  }

  /**
   * Fetch all records of a given type from IndexedDB.
   *
   * @method findAll
   * @param store
   * @param type
   * @return {Promise}
   * @public
   */
  findAll(store, type) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;

    this._logDuration(`findAll ${modelName}`);
    return new Promise((resolve, reject) => {
      indexedDB.findAll(modelName).then((records) => {
        this._logDuration(`findAll ${modelName}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/findAll');
  }

  /**
   * Find a record of a given type & ID from IndexedDB.
   *
   * @method findRecord
   * @param store
   * @param type
   * @param {String} id
   * @return {Promise}
   * @public
   */
  findRecord(store, type, id) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;

    this._logDuration(`findRecord ${modelName}/${id}`);
    return new Promise((resolve, reject) => {
      indexedDB.find(modelName, id).then((record) => {
        this._logDuration(`findRecord ${modelName}/${id}`, true);
        let data = this._normalizeSingle(record);
        if (!data) {
          reject(`findRecord ${modelName}/${id} failed!`);
          return;
        }
        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/findRecord');
  }

  /**
   * Find many records for a given type by multiple IDs.
   *
   * @method findMany
   * @param store
   * @param type
   * @param {Array} ids
   * @return {Promise}
   * @public
   */
  findMany(store, type, ids) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;

    this._logDuration(`findMany ${modelName}/${ids.join(',')}`);
    return new Promise((resolve, reject) => {
      indexedDB.find(modelName, ids).then((records) => {
        this._logDuration(`findMany ${modelName}/${ids.join(',')}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/findMany');
  }

  /**
   * Query a type from IndexedDB.
   * This will try to use real indices where possible.
   *
   * @method query
   * @param store
   * @param type
   * @param {Object} query
   * @return {Promise}
   * @public
   */
  query(store, type, query) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;
    let queryString = JSON.stringify(query);

    this._logDuration(`query ${modelName} ${queryString}`);
    return new Promise((resolve, reject) => {
      indexedDB.query(modelName, query).then((records) => {
        this._logDuration(`query ${modelName} ${queryString}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/query');
  }

  /**
   * Query a single item from IndexedDB.
   * This will try to use real indices where possible.
   *
   * @method queryRecord
   * @param store
   * @param type
   * @param {Object} query
   * @return {Promise}
   * @public
   */
  queryRecord(store, type, query) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;

    this._logDuration(`queryRecord ${modelName}`);
    return new Promise((resolve, reject) => {
      indexedDB.queryRecord(modelName, query).then((record) => {
        this._logDuration(`queryRecord ${modelName}`, true);
        let data = this._normalizeSingle(record);

        if (!data) {
          resolve({ data: null });
          return;
        }

        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/queryRecord');
  }

  /**
   * Update a given record in IndexedDB.
   *
   * @method updateRecord
   * @param store
   * @param type
   * @param snapshot
   * @return {Promise}
   * @public
   */
  updateRecord(store, type, snapshot) {
    return this._save(store, type, snapshot);
  }

  /**
   * Delete a record from IndexedDB.
   *
   * @method deleteRecord
   * @param store
   * @param type
   * @param snapshot
   * @return {Promise}
   * @public
   */
  deleteRecord(store, type, snapshot) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;
    let { id } = snapshot;

    this._logDuration(`deleteRecord ${modelName}/${id}`);
    return new Promise((resolve, reject) => {
      indexedDB.delete(modelName, id).then(() => {
        this._logDuration(`deleteRecord ${modelName}/${id}`, true);
        resolve(null);
      }, reject);
    }, 'indexedDbAdapter/deleteRecord');
  }

  /**
   * Create a new record in IndexedDB.
   *
   * @method createRecord
   * @param store
   * @param type
   * @param snapshot
   * @return {Promise}
   * @public
   */
  createRecord(store, type, snapshot) {
    return this._save(store, type, snapshot);
  }

  /**
   * This function is called under the hood by both `createRecord` and `updateRecord`.
   *
   * @method _save
   * @param store
   * @param type
   * @param snapshot
   * @return {Promise}
   * @private
   */
  _save(store, type, snapshot) {
    let indexedDB = this.indexedDb;
    let { modelName } = type;

    this._logDuration(`_save ${modelName}/${snapshot.id}`);
    return new Promise((resolve, reject) => {
      let data = {};
      let serializer = store.serializerFor(modelName);
      serializer.serializeIntoHash(data, type, snapshot, { includeId: true });
      // We need to make a deep clone of the data, as the data is mutated by the store later
      let record = cloneDeep(data.data);

      indexedDB.save(modelName, record.id, record).then(() => {
        this._logDuration(`_save ${modelName}/${snapshot.id}`, true);

        resolve(data);
      }, reject);
    }, 'indexedDbAdapter/_save');
  }

  /**
   * This is used to normalize the response of IndexedDB for array responses.
   *
   * @method _normalizeArray
   * @param records
   * @return {Object}
   * @private
   */
  _normalizeArray(records) {
    if (!records) {
      return {
        data: [],
      };
    }

    let data = array(records).compact();
    data = array(data).mapBy('json');

    return {
      data,
    };
  }

  /**
   * This is used to normalize a single record response.
   *
   * @method _normalizeSingle
   * @param record
   * @return {Object}
   * @private
   */
  _normalizeSingle(record) {
    if (!record) {
      return null;
    }

    return {
      data: record.json,
    };
  }

  /**
   * This function is used to log durations of operations to the console, if `_shouldLogDurations` is set.
   *
   * @method _logDuration
   * @param str
   * @param isEnd
   * @private
   */
  _logDuration(str, isEnd = false) {
    if (!this._shouldLogDurations) {
      return;
    }

    /* eslint-disable no-console */
    if (isEnd) {
      console.timeEnd(str);
    } else {
      console.time(str);
    }
    /* eslint-enable no-console */
  }
}
