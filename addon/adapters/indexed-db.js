import DS from 'ember-data';
import Ember from 'ember';
import $ from 'jquery';

const {
  get,
  inject,
  RSVP
} = Ember;

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  indexedDb: inject.service(),

  coalesceFindRequests: true,

  _shouldLogDurations: false,

  findAll(store, type) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;

    this._logDuration(`findAll ${modelName}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.findAll(modelName).then((records) => {
        this._logDuration(`findAll ${modelName}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    });
  },

  findRecord(store, type, id) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;

    this._logDuration(`findRecord ${modelName}/${id}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.find(modelName, id).then((record) => {
        this._logDuration(`findRecord ${modelName}/${id}`, true);
        let data = this._normalizeSingle(record);
        if (!data) {
          reject(`findRecord ${modelName}/${id} failed!`);
          return;
        }
        resolve(data);
      }, reject);
    });
  },

  findMany(store, type, ids) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;

    this._logDuration(`findMany ${modelName}/${ids.join(',')}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.find(modelName, ids).then((records) => {
        this._logDuration(`findMany ${modelName}/${ids.join(',')}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    });
  },

  query(store, type, query) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;
    let queryString = JSON.stringify(query);

    this._logDuration(`query ${modelName} ${queryString}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.query(modelName, query).then((records) => {
        this._logDuration(`query ${modelName} ${queryString}`, true);
        let data = this._normalizeArray(records);
        resolve(data);
      }, reject);
    });
  },

  queryRecord(store, type, query) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;

    this._logDuration(`queryRecord ${modelName}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.queryRecord(modelName, query).then((record) => {
        this._logDuration(`queryRecord ${modelName}`, true);
        let data = this._normalizeSingle(record);

        if (!data) {
          resolve({ data: null });
          return;
        }

        resolve(data);
      }, reject);
    });
  },

  updateRecord(store, type, snapshot) {
    return this._save(store, type, snapshot);
  },

  deleteRecord(store, type, snapshot) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;
    let id = get(snapshot, 'id');

    this._logDuration(`deleteRecord ${modelName}/${id}`);
    return new RSVP.Promise((resolve, reject) => {
      indexedDB.delete(modelName, id).then(() => {
        this._logDuration(`deleteRecord ${modelName}/${id}`, true);
        resolve(null);
      }, reject);
    });
  },

  createRecord(store, type, snapshot) {
    return this._save(store, type, snapshot);
  },

  _save(store, type, snapshot) {
    let indexedDB = get(this, 'indexedDb');
    let { modelName } = type;

    this._logDuration(`_save ${modelName}/${get(snapshot, 'id')}`);
    return new RSVP.Promise((resolve, reject) => {
      let data = {};
      let serializer = store.serializerFor(modelName);
      serializer.serializeIntoHash(data, type, snapshot, { includeId: true });
      let record = $.extend(true, {}, data.data);

      indexedDB.save(modelName, record.id, record).then(() => {
        this._logDuration(`_save ${modelName}/${get(snapshot, 'id')}`, true);

        resolve(data);
      }, reject);

    });
  },

  _normalizeArray(records) {
    if (!records) {
      return {
        data: []
      };
    }

    return {
      data: records.compact().mapBy('json')
    };
  },

  _normalizeSingle(record) {
    if (!record) {
      return null;
    }

    return {
      data: get(record, 'json')
    };
  },

  _logDuration(str, isEnd = false) {
    if (!get(this, '_shouldLogDurations')) {
      return;
    }

    if (isEnd) {
      console.timeEnd(str);
    } else {
      console.time(str);
    }
  }
});
