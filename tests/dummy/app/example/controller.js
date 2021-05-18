import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set, action } from '@ember/object';
import RSVP from 'rsvp';
import { task } from 'ember-concurrency';

export default class ExampleController extends Controller {
  @service indexedDb;
  @service store;
  @service router;

  @action
  fetchItems() {
    return new RSVP.Promise((resolve, reject) => {
      this._fetchFromAPI()
        .then(() => {
          return this.router.refresh();
        })
        .then(resolve)
        .catch(reject);
    });
  }

  @action
  markAsRead(item) {
    // This marks the items as old locally only
    set(item, 'isRead', true);
    set(item, 'isSynced', false); // Set this to false, so we know this needs to be synced

    item.save();
  }

  // This creates one item and saves it in the LS
  // In the real world, this would not be synced with the API yet
  @action
  addItem() {
    let { store } = this;

    let item = store.createRecord('item', {
      title: 'Item',
      date: new Date().toISOString().split('.')[0],
      isSynced: false,
      isRead: false,
    });

    item.save().then(() => this.router.refresh());
  }

  @action
  syncItems() {
    this._trySyncServer();
  }

  @task(function* () {
    let { indexedDb, store } = this;

    yield indexedDb.dropDatabaseTask.linked().perform();
    yield indexedDb.setupTask.linked().perform();
    store.unloadAll();

    yield this.router.refresh();
  })
  resetDbTask;

  _trySyncServer() {
    let { store } = this;

    store.query('item', { isSynced: false }).then((items) => {
      // These are now all items that are not synced
      // Here, you would actually send them to an API via e.g. ember-ajax
      // This is just mocked here.
      alert(`${items.length} item(s) were synced to the API.`);

      // Theoretically, if the sync failed, we would just leave isSynced=false, and would retry with the next sync

      // Now, we also save locally that they have been synced
      items.forEach((item) => {
        set(item, 'isSynced', true);
        item.save();
      });
    });
  }

  // In the real world, this would e.g. fetch data from the API
  // In this example, we just create dummy payloads to add
  _fetchFromAPI() {
    // Generate new items
    let { indexedDb } = this;

    return indexedDb.add('item', [
      this._createItemPayload(),
      this._createItemPayload(),
      this._createItemPayload(),
    ]);
  }

  _createItemPayload() {
    return {
      id: this._guid(),
      type: 'item',
      attributes: {
        title: 'Item ',
        date: new Date().toISOString().split('.')[0],
        'is-read': false,
      },
    };
  }

  _guid() {
    return `${+new Date()}-${Math.random()}`;
  }
}
