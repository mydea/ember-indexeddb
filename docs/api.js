YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "IndexedDb",
        "IndexedDbAdapter",
        "IndexedDbConfiguration",
        "IndexedDbSerializer",
        "ModelBulkSave",
        "ModelBulkSaver"
    ],
    "modules": [
        "Configuring your database",
        "Ember Data",
        "Querying & Inserting data",
        "Services",
        "Setup",
        "Test Helpers",
        "Usage",
        "Utils"
    ],
    "allModules": [
        {
            "displayName": "Configuring your database",
            "name": "Configuring your database",
            "description": "## Configuring your database\n\nYou need to extend the indexed-db-configuration service:\n\n```js\nimport IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';\n\nexport default class ExtendedIndexedDbConfigurationService extends IndexedDbConfigurationService {\n currentVersion = 1;\n\n version1: {\n   stores: {\n     'model-one': '&id,*isNew',\n     'model-two': '&id,*status,*modelOne,[status+modelOne]'\n   }\n }\n}\n```\n\nPlease consult the Dexie Documentation on [details about configuring your database](https://github.com/dfahlander/Dexie.js/wiki/Version.stores()).\nBasically, you should always have an `&id` column as a primary index, and add further indices that you want to query by. You can also add multi-indices for more complex querying.\n\nEach version can also have an upgrade function in addition (or instead of) a stores property. This can be used to do data migrations. See the Dexie Documentation for details about [data migrations and upgrades](https://github.com/dfahlander/Dexie.js/wiki/Version.upgrade()).\n\nYou can add as many version as you want, and Dexie will handle the upgrading for you. Note that you cannot downgrade a version. There needs to be a `versionX` property per version, starting at 1. So if you have a `currentVersion` of 3, you need to have `version1`, `version2` and `version3` properties.\n\nYou do not need to keep old versionX configurations unless they contain an upgrade. \n\nAll of these migrations are automatically run when running `this.indexedDb.setup();`.\n\nIn addition to the store configuration, you also need to define a `mapTable`.\nThis is a map of functions which is used to normalize JSONAPI payloads for IndexedDB.\n\nFor the above example, this should look something like this:\n\n```js\nmapTable: {\n 'model-one': (item) => {\n   return {\n     id: this._toString(item.id),\n     json: this._cleanupObject(item),\n     isNew: this._toZeroOne(item.isNew)\n   };\n },\n 'model-two': (item) => {\n   return {\n     id: this._toString(item.id),\n     json: this._cleanupObject(item),\n     modelOne: this._toString(item.relationships.modelOne?.data?.id),\n     status: item.attribtues.status\n   };\n }\n}\n```\n\nThings to note here:\n\n1. Always convert your IDs to strings. You can use the provided `this._toString(val)` function for this.\n2. Always clean up your json. You can use the provided `this._cleanObject(item)` for this, which will clean up prototype & meta properties/functions.\n3. IndexedDB doesn't work with boolean queries. You need to convert booleans to 1/0 when inserting it into the Database. You can use the provided `this._toZeroOne(val)` for this.\n\nYou should have one property per item you want to query for. The item which is passed in is a JSONAPI payload-item."
        },
        {
            "displayName": "Ember Data",
            "name": "Ember Data",
            "description": "## Usage with Ember Data\n\nThe real power of this utility comes together with the provided ember-data adapter. Just extend from it instead of from the default adapter:\n\n```js\nimport IndexedDbAdapter from 'ember-indexeddb/adapters/indexed-db';\n\nexport default class ApplicationAdapter extends IndexedDbAdapter {}\n```\n\nThe next step is to setup your database for your Ember Data models.\nSee {{#crossLink \"IndexedDbConfiguration\"}}IndexedDbConfiguration{{/crossLink}} for more details.\n\nA basic setup, without any special database-level querying, would look like this:\n\n```js\nimport IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';\nimport { computed, get } from '@ember/object';\n\nexport default class ExtendedIndexedDbConfigurationService extends IndexedDbConfigurationService {\n currentVersion = 1;\n\n version1 = {\n   stores: {\n     'model-a': '&id',\n     'model-b': '&id'\n   }\n };\n}\n```\n\nNow, you can simply use the normal ember-data store with functions like `store.query('item', { isNew: true })`.\nNote that it will also persist data to IndexedDB when calling e.g. `createRecord()` or `save()`.\nIf you want to persist data back to an API, you need to handle this yourself.\nThis works with the default JSONAPISerializer.\n\nNote that `query` and `queryRecord` will try to do actual querying on the database layer. This will, of course, only work if the indices have been setup correctly. If you try to query by something for which no query exists, it will fall back to filtering via JS (which works, but is _much_ slower)."
        },
        {
            "displayName": "Querying & Inserting data",
            "name": "Querying & Inserting data",
            "description": "## Querying & Inserting data\n\nYou can now work with IndexedDB!\nFor example, let's image you query some items from a server:\n\n```js\nlet { indexedDB, ajax } = this;\n\najax.request('/items').then((items) => {\n indexedDB.add('item', items);\n});\n\n// Later, fetch them again\nindexedDb.findAll('item').then((items) => {\n // Here are the JSONAPI-payloads again!\n});\n```\n\nIf you do not use JSONAPI, you should convert it to the JSONAPI format before calling `indexedDB.add('item', items);`."
        },
        {
            "displayName": "Services",
            "name": "Services",
            "description": "Available services to use.\n Overwrite IndexedDbConfiguration to fit your application."
        },
        {
            "displayName": "Setup",
            "name": "Setup",
            "description": "## Setup\n\nAfter installing the addon, you'll need to setup the database on application start.\nFor this, you should add the following to your application/route.js:\n\n```js\n// application/route.js or routes/application.js\nimport Route from '@ember/routing/route';\nimport { inject as service } from '@ember/service';\n\nexport default class ApplicationRoute extends Route {\n @service indexedDb;\n\n beforeModel() {\n   this._super(...arguments);\n\n   return this.indexedDb.setupTask.perform();\n }\n}\n```\n\nThis returns a promise that is ready once the database is setup. Note that this will reject if IndexedDB is not available - you need to handle this case accordingly.\n\nNow, you just need to define your database tables by extending the indexed-db-configuration service."
        },
        {
            "displayName": "Test Helpers",
            "name": "Test Helpers",
            "description": "## Test Helpers\n\nThis test helper can be used to interact with the database in your tests.\nIt works with the new test syntax, and can be used in all styles of tests (e.g. acceptance, integration, unit).\n\n```js\nimport { setupIndexedDb } from 'ember-indexeddb/test-support/helpers/indexed-db';\n\nmodule('Acceptance | my test', function(hooks) {\n setupApplicationTest(hooks);\n setupIndexedDb(hooks);\n\n  // add your actual tests here\n});\n```\n\nThis will setup & open a randomly named database for this test, and close & delete it again after the test."
        },
        {
            "displayName": "Usage",
            "name": "Usage",
            "description": "This addon provides utilities to work with IndexedDB based on [Dexie](http://dexie.org/).\n It provides:\n* A service to configure the database & migrations/upgrades\n * A service to interact with the database\n * An ember-data adapter for IndexedDB\n * Test helpers\nThis set of utilities makes it possible to query data from an API, put it into IndexedDB,\n and work with a local database for full offline capabilities.\n## Installation\n ```shell\n ember install ember-indexeddb\n ```\n## Changelog\n Changelog can be found [here](https://github.com/mydea/ember-indexeddb/blob/master/CHANGELOG.md)\n\n## Looking for help?\n If it is a bug [please open an issue on GitHub](http://github.com/mydea/ember-indexeddb/issues)."
        },
        {
            "displayName": "Utils",
            "name": "Utils",
            "description": "This class can be used on a DS.Model to add a `saveBulk` functionality.\n\nSaving a lot of data at the same time can be quite inefficient. To solve this issue, you can use the provided `model-bulk-save` mixin on your ember-data models:\n\n```js\nimport Model, { attr } from '@ember-data/model';\nimport { ModelBulkSaver } from 'ember-indexeddb/utils/model-bulk-saver';\n\nexport default class extends Model {\n  @attr('string') title;\n  modelBulkSaver = new ModelBulkSaver(this);\n}\n```\n\nNow, you can bulk save this model like this:\n\n```js\nlet promise1 = model1.modelBulkSaver.saveBulk();\nlet promise2 = model2.modelBulkSaver.saveBulk();\n```\n\nIn the above example, `promise1` and `promise2` would actually be the same promise, and both of these items would be saved in one transaction. This waits for 100ms before resolving,  * so every model that calls `saveBulk` in this time period will be saved in the same transactions. Note that this function will resolve with all the saved objects."
        }
    ],
    "elements": []
} };
});