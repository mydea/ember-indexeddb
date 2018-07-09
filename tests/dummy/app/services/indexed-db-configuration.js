import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
import { computed, get } from '@ember/object';

export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: computed(function() {
    return {
      stores: {
        'item': '&id,*isRead,*isSynced'
      }
    };
  }),

  mapTable: computed(function() {
    return {
      item: (item) => {
        return {
          id: this._toString(get(item, 'id')),
          json: this._cleanObject(item),
          isRead: this._toZeroOne(get(item, 'attributes.is-read')),
          isSynced: this._toZeroOne(get(item, 'attributes.is-synced'), 1)
        };
      }
    };
  })
});
