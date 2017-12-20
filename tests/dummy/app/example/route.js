import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Route.extend({

  indexedDb: service(),
  store: service(),

  beforeModel() {
    let indexedDb = get(this, 'indexedDb');
    return indexedDb.setup();
  },

  model() {
    let store = get(this, 'store');
    return store.findAll('item');
  },

  actions: {

    addItems() {
      this._markItemsAsOld();
      this._createItems().then(() => {
        this.refresh();
      });
    }

  },

  _markItemsAsOld() {
    // Mark existing items as not new
    let store = get(this, 'store');
    let oldItems = store.peekAll('item');
    oldItems.forEach((item) => {
      set(item, 'isNew', false);
      item.save();
    });
  },

  _createItems() {
    // Generate new items
    let indexedDb = get(this, 'indexedDb');
    return indexedDb.add('item', [
      this._createItemPayload(),
      this._createItemPayload(),
      this._createItemPayload()
    ]);
  },

  _createItemPayload() {
    return {
      id: this._guid(),
      type: 'item',
      attributes: {
        title: 'Item ',
        date: (new Date()).toString(),
        'is-new': true
      }
    };
  },

  _guid() {
    return `${+new Date}-${Math.random()}`;
  }

});
