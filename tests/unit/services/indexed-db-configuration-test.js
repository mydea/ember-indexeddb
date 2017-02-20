import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';
import DS from 'ember-data';

const {
  get,
  A: array,
  RSVP,
  run
} = Ember;

const {
  PromiseArray
} = DS;

moduleFor('service:indexed-db-configuration', 'Unit | Service | indexed db configuration', {});

test('mapItem() uses the default function if no mapTable is given', function(assert) {
  let service = this.subject({});

  let payload = {
    id: 'test-1',
    type: 'item',
    attributes: {
      name: 'test-name',
      'other-attribute': 'value'
    },
    relationships: {}
  };
  let result = service.mapItem('item', payload);
  assert.deepEqual(result, { id: 'test-1', json: payload });
});

test('mapItem() uses the function from mapTable if available', function(assert) {
  let service = this.subject({
    mapTable: {
      item: (payload) => {
        return {
          id: get(payload, 'id'),
          json: payload,
          staticProp: 2,
          idCopy: get(payload, 'id')
        };
      }
    }
  });

  let payload = {
    id: 'test-1',
    type: 'item',
    attributes: {
      name: 'test-name',
      'other-attribute': 'value'
    },
    relationships: {}
  };
  let result = service.mapItem('item', payload);
  assert.deepEqual(result, { id: 'test-1', json: payload, staticProp: 2, idCopy: 'test-1' });
});

test('cleanObject works', function(assert) {
  let service = this.subject({});

  let data = null;
  let result = service._cleanObject(data);
  assert.equal(result, null, 'it returns null if not given an object');

  data = {
    id: 'test-1',
    type: 'my-type',
    attributes: {
      attr1: 'test',
      attr2: 1,
      attr3: true,
      attr4: null,
      attr5: array([1, 2, 3])
    },
    relationships: {
      relationship1: {
        data: {
          type: 'my-other-type',
          id: 'rel-id-1'
        }
      },
      relationship2: {
        data: array([
          {
            type: 'my-type',
            id: 'rel-id-2'
          },
          {
            type: 'my-type',
            id: 'rel-id-3'
          }
        ])
      }
    }
  };

  result = service._cleanObject(data);
  assert.deepEqual(result, data, 'it correctly cleans basic objects');

  run(() => {
    data = {
      id: 'test-2',
      type: 'my-type',
      attributes: {
        attr1: 'test',
        attr2: 1,
        attr3: true,
        attr4: null,
        attr5: PromiseArray.create({
          promise: RSVP.Promise.resolve([1, 2, 3])
        })
      },
      relationships: {
        relationship1: {
          data: {
            type: 'my-other-type',
            id: 'rel-id-1'
          }
        },
        relationship2: {
          data: PromiseArray.create({
            promise: RSVP.Promise.resolve([
              {
                type: 'my-type',
                id: 'rel-id-2'
              },
              {
                type: 'my-type',
                id: 'rel-id-3'
              }
            ])
          })
        }
      }
    };
  });

  result = service._cleanObject(data);

  assert.deepEqual(result, {
    id: 'test-2',
    type: 'my-type',
    attributes: {
      attr1: 'test',
      attr2: 1,
      attr3: true,
      attr4: null,
      attr5: [1, 2, 3]
    },
    relationships: {
      relationship1: {
        data: {
          type: 'my-other-type',
          id: 'rel-id-1'
        }
      },
      relationship2: {
        data: [
          {
            type: 'my-type',
            id: 'rel-id-2'
          },
          {
            type: 'my-type',
            id: 'rel-id-3'
          }
        ]
      }
    }
  }, 'it correctly cleans objects with promise arrays');
});
