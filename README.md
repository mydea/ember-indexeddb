# ember-indexeddb

This addon provides utilities to work with IndexedDB based on [Dexie](http://dexie.org/).

[![Build Status](https://travis-ci.org/mydea/ember-indexeddb.svg?branch=master)](https://travis-ci.org/mydea/ember-indexeddb)
[![Ember Observer Score](https://emberobserver.com/badges/ember-indexeddb.svg)](https://emberobserver.com/addons/ember-indexeddb)
[![npm version](https://badge.fury.io/js/ember-indexeddb.svg)](https://badge.fury.io/js/ember-indexeddb)

It provides:

* A service to configure the database & migrations/upgrades
* A service to interact with the database
* An ember-data adapter for IndexedDB

This set of utilities makes it possible to query data from an API, put it into IndexedDB, and work with a local database for full offline capabilities.

## Setup

After installing the addon, you'll need to setup the database on application start. 
For this, you should add the following to your application/route.js:

```js
// application/route.js or routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  indexedDb: Ember.inject.service(),
  
  beforeModel() {
    this._super(...arguments);
    
    return this.get('indexedDb').setup();
  }
});
```

This returns a promise that is ready once the database is setup. Note that this will reject if IndexedDB is not available - you need to handle this case accordingly.

Now, you just need to define your database tables by extending the indexed-db-configuration service.

## Configuring your database

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

## Usage

You can now work with IndexedDB!
For example, let's image you query some items from a server:

```js
let indexedDB = this.get('indexedDb');
let ajax = this.get('ajax')

ajax.request('/items').then((items) => {
  indexedDB.add('item', items);
});

// Later, fetch them again
indexedDb.findAll('item').then((items) => {
  // Here are the JSONAPI-payloads again!
});
```

If you do not use JSONAPI, you should convert it to the JSONAPI format before calling `indexedDB.add('item', items);`.

## Usage with ember-data

The real power of this utility comes together with the provided ember-data adapter. Just extend from it instead of from the default adapter:

```js
import IndexedDbAdapter from 'ember-indexeddb/adapters/indexed-db';

export default IndexedDbAdapter.extend();
```

Now, you can simply use the normal ember-data store with functions like `store.query('item', { isNew: true })`.
Note that it will also persist data to IndexedDB when calling e.g. `createRecord()` or `save()`. 
If you want to persist data back to an API, you need to handle this yourself.
This works with the default JSONAPISerializer.

Note that `query` and `queryRecord` will try to do actual querying on the database layer. This will, of course, only work if the indices have been setup correctly. If you try to query by something for which no query exists, it will fall back to filtering via JS (which works, but is _much_ slower).
 
## Bulk saving models

Saving a lot of data at the same time can be quite inefficient. To solve this issue, you can use the provided `model-bulk-save` mixin on your ember-data models:

```js
import DS from 'ember-data';
import ModelBulkSaveMixin from 'ember-indexeddb/mixins/model-bulk-save';

export default DS.Model.extend(ModelBulkSaveMixin, {
  name: DS.attr('string')
});
```

Now, this model will have a new function `bulkSave()`:

```js
let model1, model2;

let promise1 = model1.saveBulk();
let promise2 = model2.saveBulk();
```

In the above example, `promise1` and `promise2` would actually be the same promise, and both of these items would be saved in one transaction. This waits for 100ms before resolving, so every model that calls `saveBulk` in this time period will be saved in the same transactions. Note that this function will resolve with all the saved objects. 

## indexedDb service

The name of the database defaults to `ember-indexeddb`. You can extend the service and set `databaseName: 'my-database'` to change that default.

The actual Dexie database is available on the service as `db` property. 

All of the following functions return a Promise. The `indexed-db` adapter uses these functions under the hood.

```js
let indexedDB = this.get('indexedDb');
indexedDB.setup();
indexedDB.dropDatabase();
indexedDB.waitForQueue();

indexedDB.query(type, query);
indexedDB.queryRecord(type, query);
indexedDB.find(type, id);
indexedDB.findAll(type);
indexedDB.add(type, items);
indexedDB.save(type, id, item);
indexedDB.saveBulk(type, item);
indexedDB.delete(type, id);
indexedDB.clear(type);
```

### setup()

Setup the database. Returns a promise that resovles when the DB is setup, or rejects if IndexedDB is not available.

### dropDatabase()

Drop the database and all data in it.

### waitForQueue()

Returns a promise that resolves when all transactions that are currently running are done. This can be used to check if there are outstanding transactions.

### query(type, query)

Query the database based on query arguments.
Depending on the queries, this will try to find a matching (multi-)index and use it. Else, it will fall back to `findAll()` and filtering via JS.

The promise resolves with an array.

### queryRecord(type, query)

This is the same as `query()`, only that it resolves with the first found object.

### find(type, id)

This fetches the item with the corresponding ID from the database.

### findAll(type)

This fetches all items from the database.

### add(type, items)

This adds item(s) to the database.
`items` can be either a JSONAPI-payload or an array of JSONAPI-payloads.

It resolves with an array of put objects.

### save(type, id, item)

Save an item to the database. This doesn't differentiate between new & updating records.

### saveBulk(type, item)

Save an item to the database, but wait for 100ms if other items should also be saved.
This is much more efficient than `save()` when saving many items in a short amount of time.

### delete(type, id)

Delete an item from the database.

### clear(type)

Delete all items from a database table.
