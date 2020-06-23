import { assert } from '@ember/debug';

/**
 * This class can be used on a DS.Model to add a `saveBulk` functionality.
 *
 * Saving a lot of data at the same time can be quite inefficient. To solve this issue, you can use the provided `model-bulk-save` mixin on your ember-data models:
 *
 * ```js
 * import Model, { attr } from '@ember-data/model';
 * import { ModelBulkSaver } from 'ember-indexeddb/utils/model-bulk-saver';
 *
 * export default class extends Model {
 *   @attr('string') title;
 *   modelBulkSaver = new ModelBulkSaver(this);
 * }
 * ```
 *
 * Now, you can bulk save this model like this:
 *
 * ```js
 *let promise1 = model1.modelBulkSaver.saveBulk();
 *let promise2 = model2.modelBulkSaver.saveBulk();
 * ```
 *
 * In the above example, `promise1` and `promise2` would actually be the same promise, and both of these items would be saved in one transaction. This waits for 100ms before resolving,  * so every model that calls `saveBulk` in this time period will be saved in the same transactions. Note that this function will resolve with all the saved objects.
 *
 * @module Utils
 * @class ModelBulkSaver
 * @public
 */
export class ModelBulkSaver {
  get indexedDb() {
    return this.model.indexedDb;
  }

  get _internalModel() {
    return this.model._internalModel;
  }

  constructor(model) {
    this.model = model;

    assert(
      `You need to inject the "indexedDb" service into your model.`,
      !!this.indexedDb
    );
  }

  // ---------------------------------------------------------------------------------------------------------
  // Methods

  /**
   * Save this model, but try to save it together with other objects
   *
   * @method saveBulk
   * @param modelName
   * @param model
   * @return {Promise}
   * @public
   */
  saveBulk() {
    let indexedDB = this.indexedDb;
    let record = this.model.serialize({ includeId: true });

    // TODO: Note that this uses internal functions
    let { modelName } = this.model.constructor;
    let promise = indexedDB.saveBulk(modelName, record.data);
    promise.then(
      () => {
        this._markAsSaved();
      },
      () => {
        this._markAsError();
      }
    );

    return promise;
  }

  /**
   * Manually mark the model as saved.
   *
   * @method _markAsSaved
   * @private
   */
  _markAsSaved() {
    // TODO: Note that this uses internal functions
    try {
      // In Ember Data 3.5+, this works a bit different
      // We differentiate by the existence of _recordData
      if (this._internalModel._recordData) {
        this._internalModel.adapterWillCommit();
        this._internalModel.adapterDidCommit();
      } else {
        this._internalModel.send('willCommit');
        this._internalModel._attributes = {};
        this._internalModel.send('didCommit');
      }
    } catch (e) {
      // Ignore if an error occurs, since this is quite hacky behavior anyhow
      // Especially an "Attempted to handle event `didCommit` on ..." error could occur
    }
  }

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
    } catch (e) {
      // Ignore if an error occurs, since this is quite hacky behavior anyhow
      // Especially an "Attempted to handle event `didCommit` on ..." error could occur
    }
  }
}
