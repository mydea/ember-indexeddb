import Model, { attr } from '@ember-data/model';
import ModelBulkSaveMixin from 'ember-indexeddb/mixins/model-bulk-save';

export default class extends Model.extend(ModelBulkSaveMixin) {
  @attr('string') title;
  @attr('string') date;
  @attr('boolean', { defaultValue: false }) isRead;

  // This is not a "real" property, e.g. it would not exist on the server side
  // We keep this here to have this in the indexed db, and so we can query by it

  @attr('boolean', { defaultValue: true }) isSynced;
}
