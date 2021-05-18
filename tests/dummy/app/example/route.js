import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ExampleRoute extends Route {
  @service indexedDb;
  @service store;

  beforeModel() {
    let { indexedDb } = this;
    return indexedDb.setupTask.perform();
  }

  model() {
    let { store } = this;
    return store.findAll('item');
  }
}
