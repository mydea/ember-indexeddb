import RSVP from 'rsvp';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupIndexedDb } from 'ember-indexeddb/test-support/helpers/indexed-db';
import { run } from '@ember/runloop';
import IndexedDbService from 'ember-indexeddb/services/indexed-db';
import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';

const createMockDb = function () {
  return {
    _versions: [],
    _stores: [],
    _upgrades: [],

    version(v) {
      this._versions.push(v);
      let _this = this;

      let obj = {
        stores(s) {
          _this._stores.push(s);
          return obj;
        },
        upgrade(u) {
          _this._upgrades.push(u);
          return obj;
        },
      };

      return obj;
    },
  };
};

module('Unit | Service | indexed-db', function (hooks) {
  setupTest(hooks);

  module('mocked', function (hooks) {
    setupIndexedDb(hooks);

    // service.setup() is hard to test as it relies on the global Dexie

    test('add works', function (assert) {
      let done = assert.async();
      assert.expect(6);
      let db = createMockDb();

      let putItems = [];
      let promises = [];

      db.items = {
        bulkPut(items) {
          putItems.push(items);
          let promise = RSVP.Promise.resolve(items);
          promises.push(promise);
          return promise;
        },
      };

      let service = this.owner.factoryFor('service:indexed-db').create({
        db,
      });

      let item = {
        id: 'TEST-1',
        type: 'items',
      };
      let promise1 = service.add('items', item);

      let response1 = [
        {
          id: 'TEST-1',
          json: {
            id: 'TEST-1',
            attributes: {},
            relationships: {},
            type: 'items',
          },
        },
      ];
      assert.deepEqual(putItems, [response1], 'adding one items works');

      promise1.then((data) => {
        assert.deepEqual(
          data,
          response1,
          'promise 1 resolves with array of data'
        );
      });

      putItems = [];
      let item2 = {
        id: 'TEST-2',
        type: 'items',
      };
      let promise2 = service.add('items', [item, item2]);

      let response2 = [
        {
          id: 'TEST-1',
          json: {
            id: 'TEST-1',
            attributes: {},
            relationships: {},
            type: 'items',
          },
        },
        {
          id: 'TEST-2',
          json: {
            id: 'TEST-2',
            attributes: {},
            relationships: {},
            type: 'items',
          },
        },
      ];
      assert.deepEqual(putItems, [response2], 'adding two items works');

      let promiseQueue = service._promiseQueue;
      assert.equal(
        promiseQueue.length,
        2,
        'there are two items in the promise queue'
      );

      promise2.then((data) => {
        assert.deepEqual(
          data,
          response2,
          'promise 2 resolves with array of data'
        );
      });

      RSVP.all([promise1, promise2]).then(() => {
        assert.equal(promiseQueue.length, 0, 'promise queue is cleared');
        done();
      });
    });

    test('it does not open multiple db instances on setup', async function (assert) {
      let service = this.owner.lookup('service:indexed-db');

      await run(() => service.setup());
      let { db } = service;
      assert.ok(db, 'database is setup');

      await run(() => service.setup());
      let db2 = service.db;
      assert.equal(db2, db, 'db is not overwritten');
    });
  });

  module('DB migration', function (hooks) {
    hooks.afterEach(async function () {
      let service = this.owner.lookup('service:indexed-db');

      // Cleanup
      await service.dropDatabaseTask.perform();
    });

    test('it works with just one version', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id',
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello' },
      });

      let item = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(item, {
        id: '1',
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });
    });

    test('it works with an upgrade', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id',
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');
      let configService = this.owner.lookup('service:indexed-db-configuration');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello' },
      });

      let item = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(item, {
        id: '1',
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });

      // Now run an upgrade...
      configService.currentVersion = 2;
      configService.version2 = {
        stores: {
          'item-1': '&id,isNew',
        },
        upgrade: (transaction) => {
          transaction['item-1'].each((taskItem, cursor) => {
            taskItem.isNew = 1;
            cursor.update(taskItem);
          });
        },
      };

      await service.db.close();
      service.db = null;
      await service.setupTask.perform();

      let newItem = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(newItem, {
        id: '1',
        isNew: 1,
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });
    });

    test('it works without an upgrade', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 5;

        version5 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');
      let configService = this.owner.lookup('service:indexed-db-configuration');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello' },
      });

      let item = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(item, {
        id: '1',
        name: 'hello',
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });

      // Now run an upgrade...
      configService.currentVersion = 6;
      delete configService.version5;
      configService.version6 = {
        stores: {
          'item-1': '&id,name,isNew',
        },
      };
      configService.mapTable = {
        'item-1': (item) => {
          return {
            id: configService._toString(item.id),
            name: item.attributes.name,
            isNew: configService._toZeroOne(item.attributes.isNew),
            json: configService._cleanObject(item),
          };
        },
      };

      await service.db.close();
      service.db = null;
      await service.setupTask.perform();

      let oldItem = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(oldItem, {
        id: '1',
        name: 'hello',
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });

      // Add another new one
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let newItem = await service.queryRecord('item-1', { isNew: true });

      assert.deepEqual(newItem, {
        id: '2',
        name: 'hello2',
        isNew: 1,
        json: {
          attributes: {
            name: 'hello2',
            isNew: true,
          },
          id: '2',
          relationships: {},
          type: 'item-1',
        },
      });
    });

    test('it works with just one higher version', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 11;

        version11 = {
          stores: {
            'item-1': '&id',
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello' },
      });

      let item = await service.queryRecord('item-1', { name: 'hello' });

      assert.deepEqual(item, {
        id: '1',
        json: {
          attributes: {
            name: 'hello',
          },
          id: '1',
          relationships: {},
          type: 'item-1',
        },
      });
    });
  });

  module('querying', function (hooks) {
    hooks.afterEach(async function () {
      let service = this.owner.lookup('service:indexed-db');

      // Cleanup
      await service.dropDatabaseTask.perform();
    });

    test('it allows to filter for an indexed field', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {
        name: 'hello',
      });

      assert.deepEqual(
        items,
        [
          {
            id: '1',
            json: {
              attributes: {
                isNew: true,
                name: 'hello',
              },
              id: '1',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
          {
            id: '2',
            json: {
              attributes: {
                isNew: false,
                name: 'hello',
              },
              id: '2',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
        ],
        'indexed search works'
      );
    });

    test('it allows to filter for an unindexed fields', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {
        isNew: true,
      });

      assert.deepEqual(
        items,
        [
          {
            id: '1',
            json: {
              attributes: {
                isNew: true,
                name: 'hello',
              },
              id: '1',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
          {
            id: '3',
            json: {
              attributes: {
                isNew: true,
                name: 'hello2',
              },
              id: '3',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello2',
          },
        ],
        'non-indexed search works'
      );
    });

    test('it allows to combine indexed & unindexed fields', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {
        name: 'hello',
        isNew: true,
      });

      assert.deepEqual(
        items,
        [
          {
            id: '1',
            json: {
              attributes: {
                isNew: true,
                name: 'hello',
              },
              id: '1',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
        ],
        'combi search works'
      );
    });

    test('it allows to use a compound index', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,[name+isNew]',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              isNew: this._toZeroOne(item.attributes.isNew),
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {
        name: 'hello',
        isNew: true,
      });

      assert.deepEqual(
        items,
        [
          {
            id: '1',
            json: {
              attributes: {
                isNew: true,
                name: 'hello',
              },
              id: '1',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
            isNew: 1,
          },
        ],
        'combi search works'
      );
    });

    test('it allows to provide an empty query object', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {});

      assert.deepEqual(
        items,
        [
          {
            id: '1',
            json: {
              attributes: {
                isNew: true,
                name: 'hello',
              },
              id: '1',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
          {
            id: '2',
            json: {
              attributes: {
                isNew: false,
                name: 'hello',
              },
              id: '2',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello',
          },
          {
            id: '3',
            json: {
              attributes: {
                isNew: true,
                name: 'hello2',
              },
              id: '3',
              relationships: {},
              type: 'item-1',
            },
            name: 'hello2',
          },
        ],
        'empty query search works'
      );
    });

    test('it handles empty results', async function (assert) {
      class TestIndexedDbConfigurationService extends IndexedDbConfigurationService {
        currentVersion = 1;

        version1 = {
          stores: {
            'item-1': '&id,name',
          },
        };

        mapTable = {
          'item-1': (item) => {
            return {
              id: this._toString(item.id),
              name: item.attributes.name,
              json: this._cleanObject(item),
            };
          },
        };
      }

      class TestIndexedDbService extends IndexedDbService {
        databaseName = 'test-db-migration-1';
      }

      this.owner.register('service:indexed-db', TestIndexedDbService);
      this.owner.register(
        'service:indexed-db-configuration',
        TestIndexedDbConfigurationService
      );

      let service = this.owner.lookup('service:indexed-db');

      await service.setupTask.perform();

      // Try interacting with it
      await service.add('item-1', {
        id: '1',
        type: 'item-1',
        attributes: { name: 'hello', isNew: true },
      });
      await service.add('item-1', {
        id: '2',
        type: 'item-1',
        attributes: { name: 'hello', isNew: false },
      });
      await service.add('item-1', {
        id: '3',
        type: 'item-1',
        attributes: { name: 'hello2', isNew: true },
      });

      let items = await service.query('item-1', {
        name: 'blub',
      });

      assert.deepEqual(items, [], 'not-found search works');
    });
  });
});
