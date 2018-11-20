import IndexedDb from './services/indexed-db';
import IndexedDbConfiguration from './services/indexed-db-configuration';

/**
 *
 * This addon provides utilities to work with IndexedDB based on [Dexie](http://dexie.org/).
 * It provides:
 *
 * * A service to configure the database & migrations/upgrades
 * * A service to interact with the database
 * * An ember-data adapter for IndexedDB
 * * Test helpers
 *
 * This set of utilities makes it possible to query data from an API, put it into IndexedDB,
 * and work with a local database for full offline capabilities.
 *
 * ## Installation
 * ```shell
 * ember install ember-indexeddb
 * ```
 *
 * ## Changelog
 * Changelog can be found [here](https://github.com/mydea/ember-indexeddb/blob/master/CHANGELOG.md)
 *
 *
 * ## Looking for help?
 * If it is a bug [please open an issue on GitHub](http://github.com/mydea/ember-indexeddb/issues).
 *
 * @module Usage
 * @public
 */

/**
 * ## Setup

 After installing the addon, you'll need to setup the database on application start.
 For this, you should add the following to your application/route.js:

 ```js
 // application/route.js or routes/application.js
 import Route from '@ember/routing/route';
 import { inject as service } from '@ember/service';

 export default Ember.Route.extend({
  indexedDb: service(),

  beforeModel() {
    this._super(...arguments);

    return this.indexedDb.setupTask.perform();
  }
});
 ```

 This returns a promise that is ready once the database is setup. Note that this will reject if IndexedDB is not available - you need to handle this case accordingly.

 Now, you just need to define your database tables by extending the indexed-db-configuration service.
 *
 * @module Usage
 * @submodule Setup
 * @public
 */

/**
 * ## Configuring your database

 You need to extend the indexed-db-configuration service:

 ```js
 import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';

 export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: {
    stores: {
      'model-one': '&id,*isNew',
      'model-two': '&id,*status,*modelOne,[status+modelOne]'
    }
  }
});
 ```

 Please consult the Dexie Documentation on [details about configuring your database](https://github.com/dfahlander/Dexie.js/wiki/Version.stores()).
 Basically, you should always have an `&id` column as a primary index, and add further indices that you want to query by. You can also add multi-indices for more complex querying.

 Each version can also have an upgrade function in addition (or instead of) a stores property. This can be used to do data migrations. See the Dexie Documentation for details about [data migrations and upgrades](https://github.com/dfahlander/Dexie.js/wiki/Version.upgrade()).

 You can add as many version as you want, and Dexie will handle the upgrading for you. Note that you cannot downgrade a version. There needs to be a `versionX` property per version, starting at 1. So if you have a `currentVersion` of 3, you need to have `version1`, `version2` and `version3` properties.

 All of these migrations are automatically run when running `this.get('indexedDb').setup();`.

 In addition to the store configuration, you also need to define a `mapTable`.
 This is a map of functions which is used to normalize JSONAPI payloads for IndexedDB.

 For the above example, this should look something like this:

 ```js
 mapTable: computed(function() {
  return {
    'model-one': (item) => {
      return {
        id: this._toString(get(item, 'id')),
        json: this._cleanupObject(item),
        isNew: this._toZeroOne(get(item, 'isNew'))
      };
    },
    'model-two': (item) => {
      return {
        id: this._toString(get(item, 'id')),
        json: this._cleanupObject(item),
        modelOne: this._toString(get(item, 'relationships.modelOne.data.id')),
        status: get(item, 'attributes.status')
      };
    }
  };
})
 ```

 Things to note here:

 1. Always convert your IDs to strings. You can use the provided `this._toString(val)` function for this.
 2. Always clean up your json. You can use the provided `this._cleanObject(item)` for this, which will clean up prototype & meta properties/functions.
 3. IndexedDB doesn't work with boolean queries. You need to convert booleans to 1/0 when inserting it into the Database. You can use the provided `this._toZeroOne(val)` for this.

 You should have one property per item you want to query for. The item which is passed in is a JSONAPI payload-item.

 * @module Usage
 * @submodule Configuring your database
 * @public
 */

/**
 * ## Querying & Inserting data

 You can now work with IndexedDB!
 For example, let's image you query some items from a server:

 ```js
 let { indexedDB, ajax } = this;

 ajax.request('/items').then((items) => {
  indexedDB.add('item', items);
});

 // Later, fetch them again
 indexedDb.findAll('item').then((items) => {
  // Here are the JSONAPI-payloads again!
});
 ```

 If you do not use JSONAPI, you should convert it to the JSONAPI format before calling `indexedDB.add('item', items);`.
 *
 * @module Usage
 * @submodule Querying & Inserting data
 * @public
 */

/**
 *
 * Available services to use.
 * Overwrite IndexedDbConfiguration to fit your application.
 *
 * @module Services
 * @public
 */

/**
 * ## Usage with Ember Data
 *
 * The real power of this utility comes together with the provided ember-data adapter. Just extend from it instead of from the default adapter:

 ```js
 import IndexedDbAdapter from 'ember-indexeddb/adapters/indexed-db';

 export default IndexedDbAdapter.extend();
 ```

 The next step is to setup your database for your Ember Data models.
 See {{#crossLink "IndexedDbConfiguration"}}IndexedDbConfiguration{{/crossLink}} for more details.

 A basic setup, without any special database-level querying, would look like this:

 ```js
 import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
 import { computed, get } from '@ember/object';

 export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: computed(function() {
    return {
      stores: {
        'item': '&id,*isRead,*isSynced'
      }
    };
  }),

  mapTable: computed(function() {
    return {
      'model-a': (item) => {
        return {
          id: this._toString(get(item, 'id')),
          json: this._cleanObject(item)
        };
      },
       'model-b': (item) => {
        return {
          id: this._toString(get(item, 'id')),
          json: this._cleanObject(item)
        };
      }
    };
  })
});
 ```

 Now, you can simply use the normal ember-data store with functions like `store.query('item', { isNew: true })`.
 Note that it will also persist data to IndexedDB when calling e.g. `createRecord()` or `save()`.
 If you want to persist data back to an API, you need to handle this yourself.
 This works with the default JSONAPISerializer.

 Note that `query` and `queryRecord` will try to do actual querying on the database layer. This will, of course, only work if the indices have been setup correctly. If you try to query by something for which no query exists, it will fall back to filtering via JS (which works, but is _much_ slower).
 *
 * @module Ember Data
 * @public
 */

export default {
  IndexedDb,
  IndexedDbConfiguration
};
