import Ember from 'ember';

const {
  get,
  inject,
  Mixin
} = Ember;

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
 * @public
 */
export default Mixin.create({

  indexedDb: inject.service(),

  // ---------------------------------------------------------------------------------------------------------
  // Methods

  /**
   * Save this model, but try to save it together with other objects
   *
   * @method saveBulk
   * @param modelName
   * @param model
   * @return {RSVP.Promise}
   * @public
   */
  saveBulk() {
    let indexedDB = get(this, 'indexedDb');
    let record = this.serialize({ includeId: true });

    // TODO: Note that this uses internal functions
    let { modelName } = this.constructor;
    let promise = indexedDB.saveBulk(modelName, get(record, 'data'));
    promise.then(() => {
      this._markAsSaved();
    }, () => {
      this._markAsError();
    });

    return promise;
  },

  /**
   * Manually mark the model as saved.
   *
   * @method _markAsSaved
   * @private
   */
  _markAsSaved() {
    // TODO: Note that this uses internal functions
    try {
      this._internalModel.send('willCommit');
      this._internalModel._attributes = {};
      this._internalModel.send('didCommit');
    } catch(e) {
      // Ignore if an error occurs, since this is quite hacky behavior anyhow
      // Especially an "Attempted to handle event `didCommit` on ..." error could occur
    }

  },

  /**
   * Manually mark the model as having an error.
   *
   * @method _markAsError
   * @private
   */
  _markAsError() {
    // TODO: Note that this uses internal functions
    try {
      this._internalModel.send('becameInvalid');
      this._internalModel.send('becameError');
    } catch(e) {
      // Ignore if an error occurs, since this is quite hacky behavior anyhow
      // Especially an "Attempted to handle event `didCommit` on ..." error could occur
    }
  }

});
