import RSVP from 'rsvp';
import { get } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupIndexedDb } from 'ember-indexeddb/test-support/helpers/indexed-db';
import { run } from '@ember/runloop';

const createMockDb = function() {
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
        }
      };

      return obj;
    }
  };
};

module('Unit | Service | indexed-db', function(hooks) {
  setupTest(hooks);
  setupIndexedDb(hooks);

  // service.setup() is hard to test as it relies on the global Dexie

  test('add works', function(assert) {
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
      }
    };

    let service = this.owner.factoryFor('service:indexed-db').create({
      db
    });

    let item = {
      id: 'TEST-1',
      type: 'items'
    };
    let promise1 = service.add('items', item);

    let response1 = [
      {
        id: 'TEST-1',
        json: {
          id: 'TEST-1', attributes: {}, relationships: {}, type: 'items'
        }
      }
    ];
    assert.deepEqual(putItems,
      [
        response1
      ],
      'adding one items works'
    );

    promise1.then((data) => {
      assert.deepEqual(data, response1, 'promise 1 resolves with array of data');
    });

    putItems = [];
    let item2 = {
      id: 'TEST-2',
      type: 'items'
    };
    let promise2 = service.add('items', [item, item2]);

    let response2 = [
      {
        id: 'TEST-1',
        json: {
          id: 'TEST-1', attributes: {}, relationships: {}, type: 'items'
        }
      },
      {
        id: 'TEST-2',
        json: {
          id: 'TEST-2', attributes: {}, relationships: {}, type: 'items'
        }
      }
    ];
    assert.deepEqual(putItems,
      [
        response2
      ],
      'adding two items works'
    );

    let promiseQueue = get(service, '_promiseQueue');
    assert.equal(get(promiseQueue, 'length'), 2, 'there are two items in the promise queue');

    promise2.then((data) => {
      assert.deepEqual(data, response2, 'promise 2 resolves with array of data');
    });

    RSVP.all([promise1, promise2]).then(() => {
      assert.equal(get(promiseQueue, 'length'), 0, 'promise queue is cleared');
      done();
    });
  });

  test('it does not open multiple db instances on setup', async function(assert) {
    let service = this.owner.lookup('service:indexed-db');

    await run(() => service.setup());
    let { db } = service;
    assert.ok(db, 'database is setup');

    await run(() => service.setup());
    let db2 = service.db;
    assert.equal(db2, db, 'db is not overwritten');
  });

});
