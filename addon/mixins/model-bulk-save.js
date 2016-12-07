import Ember from 'ember';

const {
  get,
  inject,
  Mixin
} = Ember;

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
    } catch (e) {
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
    } catch (e) {
      // Ignore if an error occurs, since this is quite hacky behavior anyhow
      // Especially an "Attempted to handle event `didCommit` on ..." error could occur
    }
  }

});
