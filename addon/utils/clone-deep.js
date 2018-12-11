import { typeOf as getTypeOf } from '@ember/utils';

function isObject(obj) {
  return getTypeOf(obj) === 'object' && obj.constructor === Object;
}

function isArray(obj) {
  return getTypeOf(obj) === 'array';
}

function isCloneableInstance(obj) {
  return getTypeOf(obj) === 'instance' && getTypeOf(obj.clone) === 'function';
}

/**
 * Deep-clone an object.
 *
 * @namespace EmberIndexeddb.Util
 * @method cloneDeep
 * @param {Object} obj An object to clone deeply
 * @return {Object} The cloned object
 * @public
 */
export function cloneDeep(obj) {
  let data = {};
  Object.keys(obj).forEach((key) => {
    let value = obj[key];

    data[key] = cloneValue(value);
  });

  return data;
}

export default cloneDeep;

function cloneValue(value) {
  if (isArray(value)) {
    return cloneArray(value);
  }
  if (isObject(value)) {
    return cloneDeep(value);
  }
  if (isCloneableInstance(value)) {
    return value.clone();
  }
  return value;
}

function cloneArray(value) {
  return value.map(cloneValue);
}
