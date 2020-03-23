import Model, { attr } from '@ember-data/model';
import { ModelBulkSaver } from 'ember-indexeddb/utils/model-bulk-saver';
import { inject as service } from '@ember/service';

export default class extends Model {
  @service indexedDb;

  @attr('string') title;
  @attr('string') date;
  @attr('boolean', { defaultValue: false }) isRead;

  // This is not a "real" property, e.g. it would not exist on the server side
  // We keep this here to have this in the indexed db, and so we can query by it

  @attr('boolean', { defaultValue: true }) isSynced;

  modelBulkSaver = new ModelBulkSaver(this);
}
