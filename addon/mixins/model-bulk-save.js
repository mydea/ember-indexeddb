/* eslint-disable ember/no-new-mixins */
import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';
import { ModelBulkSaver } from 'ember-indexeddb/utils/model-bulk-saver';
import { deprecate } from '@ember/debug';

/**
 *
 * This mixin can be used on a DS.Model to add a `saveBulk` function.
 *
 * Saving a lot of data at the same time can be quite inefficient. To solve this issue, you can use the provided `model-bulk-save` mixin on your ember-data models:
 *
 * ```js
 *import DS from 'ember-data';
 *import ModelBulkSaveMixin from 'ember-indexeddb/mixins/model-bulk-save';
 *
 *export default DS.Model.extend(ModelBulkSaveMixin, {
 *  name: DS.attr('string')
 *});
 * ```
 *
 * Now, this model will have a new function `bulkSave()`:
 *
 * ```js
 *let promise1 = model1.saveBulk();
 *let promise2 = model2.saveBulk();
 * ```
 *
 * In the above example, `promise1` and `promise2` would actually be the same promise, and both of these items would be saved in one transaction. This waits for 100ms before resolving,  * so every model that calls `saveBulk` in this time period will be saved in the same transactions. Note that this function will resolve with all the saved objects.
 *
 * @module Ember Data
 * @class ModelBulkSave
 * @extends Ember.Mixin
 * @private
 */
export default Mixin.create({
  indexedDb: service(),

  init() {
    this._super(...arguments);

    this.modelBulkSaver = new ModelBulkSaver(this);

    deprecate(
      `ModelBulkSave mixin is deprecated, please use ModelBulkSaver class directly, like this:

import Model from '@ember-data/model';
import { ModelBulkSaver } from 'ember-indexeddb/utils/model-bulk-saver';
import { inject as service } from '@ember/service';

export default class extends Model {
  @service indexedDb;
  modelBulkSaver = new ModelBulkSaver(this);
}

// Save: model.modelBulkSaver.saveBulk();
`,
      false,
      { id: 'ember-indexeddb.mixin', until: '3.0.0' }
    );
  },

  saveBulk() {
    return this.modelBulkSaver.saveBulk(...arguments);
  },
});
