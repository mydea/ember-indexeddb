import Ember from 'ember';
import computed from 'ember-computed';

const {
  Service,
  get,
  typeOf: getTypeOf,
  A: array
} = Ember;

export default Service.extend({

  /**
   * Increment this whenever you do a new database version.
   * Set it to 1 on your initial version.
   *
   * For every version, you should provide a `versionX` property.
   * Each of these properties should be an object with "stores" and/or "upgrade" properties.
   *
   * stores should be an object where the keys are dasherized, singular model names (e.g. task-item),
   * and the value is a string with the indexedable fields.
   * See https://github.com/dfahlander/Dexie.js/wiki/Version.stores() for detailed options.
   *
   * upgrade is a function that gets a transaction as parameter, which can be used to run database migrations.
   * See https://github.com/dfahlander/Dexie.js/wiki/Version.upgrade() for detailed options/examples.
   *
   * An example would be:
   *
   * ```js
   * version1: {
   *    stores: {
   *      'task': '&id*,isRead',
   *      'task-item': '&id'
   *    }
   * },
   *
   * version2: {
   *    stores: {
   *      'task-item': '&id,*isNew'
   *    },
   *    upgrade: (transaction) => {
     *     transaction['task-item'].each((taskItem, cursor) => {
           taskItem.isNew = 0;
           cursor.update(taskItem);
          });
   *    }
   * }
   * ```
   *
   * The
   * You can also use upgrade/store without using the other option.
   *
   * @property currentVersion
   * @type {Number}
   * @public
   */
  currentVersion: 0,

  /**
   * The map functions for the tables.
   * This should be an object with one key per table
   * where the value is a function that takes an object and returns an object to save in IndexedDB.
   *
   * This object NEEDS to contain at least the properties id & json.
   * It should also contain one property per queryable property on the database table.
   *
   * There are a few things to note here:
   *
   *   1. Always convert your IDs to strings. You can use the provided `this._toString(val)` function for this.
   *   2. Always clean up your json. You can use the provided `this._cleanObject(item)` for this.
   *   3. IndexedDB doesn't work with boolean queries. You need to convert booleans to 1/0 when inserting it into the Database.
   *      You can use the provided `this._toZeroOne(val)` for this.
   *
   * For example, the following table config:
   *
   * ```js
   * {
   *    task: '++id,isRead,status,[isRead+status]'
   * }
   * ```
   *
   * should look something like this:
   *
   * ```js
   * return {
   *    task: (item) => {
   *      return {
   *        id: this._toString(get(item, 'id')),
   *        json: this._cleanObject(item),
   *        isRead: this._toZeroOne(get(item, 'attributes.isRead')),
   *        status: get(item, 'attributes.status')
   *      };
   *    }
   * };
   * ```
   *
   * Note that if you do not specify anything here, it will default to
   *
   * ```js
   * return {
   *    id: this._toString(get(item, 'id')),
   *    json: this._cleanObject(item)
   * };
   * ```
   *
   * @property mapTable
   * @type {Object}
   * @protected
   */
  mapTable: computed(function() {
    return {};
  }),

  /**
   * Map a payload to a database table.
   * This will use the function provided in mapTable to get a payload to insert into IndexedDB.
   * Returns null if no map function is found for the type.
   *
   * @method mapItem
   * @param {String} type The type of object to map
   * @param {Object} item The data to map
   * @return {Object}
   * @public
   */
  mapItem(type, item) {
    let tables = get(this, 'mapTable');
    let mapFunc = get(tables, type);

    if (!item) {
      return null;
    }

    if (!mapFunc) {
      return {
        id: this._toString(get(item, 'id')),
        json: this._cleanObject(item)
      };
    }

    return mapFunc(item);
  },

  /**
   * Setup the database and do all necessary database migrations.
   *
   * @method setupDatabase
   * @param {Dexie} db
   * @return {Dexie}
   * @public
   */
  setupDatabase(db) {
    let currentVersion = get(this, 'currentVersion');

    for (let v = 1; v <= currentVersion; v++) {
      let version = get(this, `version${v}`);
      let stores = get(version, 'stores');
      let upgrade = get(version, 'upgrade');

      if (stores && upgrade) {
        db.version(v).stores(stores).upgrade(upgrade);
      } else if (stores) {
        db.version(v).stores(stores);
      } else if (upgrade) {
        db.version(v).upgrade(upgrade);
      }

    }

    return db;
  },

  /**
   * Cleanup a json object.
   * This will convert array-like structures to actual arrays for saving.
   * It will strip out meta properties etc.
   *
   * @method _cleanObject
   * @param {Object} data
   * @return {{id, type, attributes: {}, relationships: {}}}
   * @private
   */
  _cleanObject(data) {
    if (!data) {
      return null;
    }

    let obj = {
      id: get(data, 'id'),
      type: get(data, 'type'),
      attributes: {},
      relationships: {}
    };

    let attributes = get(data, 'attributes') || {};
    let relationships = get(data, 'relationships') || {};

    let isArray = (item) => {
      return getTypeOf(item) === 'array' || (getTypeOf(item) === 'instance' && getTypeOf(item.toArray) === 'function');
    };

    for (let i in attributes) {
      if (!attributes.hasOwnProperty(i)) {
        continue;
      }

      // Convert array-like structures to real arrays
      if (isArray(attributes[i])) {
        obj.attributes[i] = array(attributes[i]).toArray();
      } else {
        obj.attributes[i] = attributes[i];
      }
    }

    for (let i in relationships) {
      if (!relationships.hasOwnProperty(i)) {
        continue;
      }
      if (isArray(relationships[i].data)) {
        obj.relationships[i] = { data: array(relationships[i].data).toArray() };
      } else {
        obj.relationships[i] = relationships[i];
      }
    }

    return obj;
  },

  /**
   * Convert a property to a string.
   *
   * @method _toString
   * @param {Mixed} val
   * @return {String}
   * @private
   */
  _toString(val) {
    return `${val}`;
  },

  /**
   * Convert a boolean to 1/0.
   *
   * @method _toZeroOne
   * @param val
   * @return {1|0}
   * @private
   */
  _toZeroOne(val) {
    return val ? 1 : 0;
  }

});
