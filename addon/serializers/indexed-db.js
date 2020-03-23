import JSONAPISerializer from '@ember-data/serializer/json-api';

/**
 *
 * This Ember-Data serializer will fetch and save all data to/from IndexedDB.
 *
 * @module Ember Data
 * @class IndexedDbSerializer
 * @extends DS.JSONAPISerializer
 * @public
 */
export default class IndexedDbSerializer extends JSONAPISerializer {}
