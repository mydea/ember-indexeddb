import { cloneDeep } from 'ember-indexeddb/utils/clone-deep';
import { module, test } from 'qunit';

module('Unit | Utility | clone-deep', function() {
  test('it works', function(assert) {
    let obj = {
      string: 'a',
      number: 'b',
      array: [1, 2, 3],
      obj: { val1: 1, val2: 2 },
      nestedArray: [
        { val3: [4, 5] }
      ],
      date: new Date()
    };
    let result = cloneDeep(obj);

    assert.notEqual(result, obj, 'it is not the same instance');
    assert.deepEqual(result, obj, 'it has the same content as the source object');

    // Ensure data types are correctly cloned
    assert.notEqual(result.array, obj.array, 'array is cloned');
    assert.notEqual(result.obj, obj.obj, 'object is cloned');
    assert.notEqual(result.nestedArray, obj.nestedArray, 'nested array is cloned');
    assert.notEqual(result.nestedArray[0], obj.nestedArray[0], 'nested array content is cloned');
    assert.notEqual(result.nestedArray[0].val3, obj.nestedArray[0].val3, 'nested array content object is cloned');
    assert.equal(result.date, obj.date, 'date is not cloned');
  });
});
