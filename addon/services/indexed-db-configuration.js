import Service from '@ember/service';
import { typeOf as getTypeOf, isNone } from '@ember/utils';
import { A as array } from '@ember/array';
import { assert } from '@ember/debug';

/**
 * This service should be overwritten to configure IndexedDB.
 * Overwrite the `mapTable` property & add `versionX` properties to fit your application.
 *
 * @module Services
 * @class IndexedDbConfiguration
 * @extends Ember.Service
 * @public
 */
export default class IndexedDbConfigurationService extends Service {
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
   * Note that in newer versions of Dexie, you do not need to keep old version definitions anymnore, unless they contain upgrade instructions.
   * Instead, each version has to contain the full, current schema (not just the updates to the last version).
   *
   * An example would be:
   *
   * ```js
   * // You can delete this safely when adding version2, as it does not contain an upgrade
   * version1 = {
   *    stores: {
   *      'task': '&id*,isRead',
   *      'task-item': '&id'
   *    }
   * },
   *
   * version2 = {
   *     stores: {
   *      'task': '&id*,isRead',
   *      'task-item': '&id,*isNew'
   *    }
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
  currentVersion = 0;

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
   *        id: this._toString(item.id),
   *        json: this._cleanObject(item),
   *        isRead: this._toZeroOne(item.attributes.isRead),
   *        status: item.attributes.status
   *      };
   *    }
   * };
   * ```
   *
   * Note that if you do not specify anything here, it will default to
   *
   * ```js
   * return {
   *    id: this._toString(item.id),
   *    json: this._cleanObject(item)
   * };
   * ```
   *
   * @property mapTable
   * @type {Object}
   * @protected
   */
  mapTable = {};

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
    let tables = this.mapTable;
    let mapFunc = tables[type];

    if (!item) {
      return null;
    }

    if (!mapFunc) {
      return {
        id: this._toString(item.id),
        json: this._cleanObject(item),
      };
    }

    return mapFunc(item);
  }

  /**
   * Setup the database and do all necessary database migrations.
   *
   * @method setupDatabase
   * @param {Dexie} db
   * @return {Dexie}
   * @public
   */
  setupDatabase(db) {
    let currentVersion = this.currentVersion;

    assert(
      'You need to override services/indexed-db-configuration.js and provide at least one version.',
      currentVersion
    );

    for (let v = 1; v <= currentVersion; v++) {
      let versionName = `version${v}`;
      let { stores, upgrade } = this[versionName];

      if (stores && upgrade) {
        db.version(v).stores(stores).upgrade(upgrade);
      } else if (stores) {
        db.version(v).stores(stores);
      } else if (upgrade) {
        db.version(v).upgrade(upgrade);
      }
    }

    return db;
  }

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

    let { id, type, attributes = {}, relationships = {} } = data;

    let obj = {
      id,
      type,
      attributes: {},
      relationships: {},
    };

    let isArray = (item) => {
      return (
        getTypeOf(item) === 'array' ||
        (getTypeOf(item) === 'instance' &&
          getTypeOf(item.toArray) === 'function')
      );
    };

    Object.keys(attributes).forEach((prop) => {
      // Convert array-like structures to real arrays
      if (isArray(attributes[prop])) {
        obj.attributes[prop] = array(attributes[prop]).toArray();
      } else {
        obj.attributes[prop] = attributes[prop];
      }
    });

    Object.keys(relationships).forEach((prop) => {
      if (isArray(relationships[prop].data)) {
        obj.relationships[prop] = {
          data: array(relationships[prop].data).toArray(),
        };
      } else {
        obj.relationships[prop] = relationships[prop];
      }
    });

    return obj;
  }

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
  }

  /**
   * Convert a boolean to 1/0.
   * Optionally, you can specify the value that should be used if the given value does not exist in the payload.
   * For example, if you want that a given value should be 1 if not found in the payload, use `this._toZeroOne(value, 1)`.
   *
   * @method _toZeroOne
   * @param {Mixed} val
   * @param {0|1} noneValue The value to use if val is null/undefined.
   * @return {1|0}
   * @private
   */
  _toZeroOne(val, noneValue = 0) {
    if (isNone(val)) {
      return noneValue;
    }
    return val ? 1 : 0;
  }
}
