import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
import { get } from '@ember/object';

export default class extends IndexedDbConfigurationService {
  currentVersion = 1;

  version1 = {
    stores: {
      item: '&id,*isRead,*isSynced',
    },
  };

  mapTable = {
    item: (item) => {
      return {
        id: this._toString(get(item, 'id')),
        json: this._cleanObject(item),
        isRead: this._toZeroOne(get(item, 'attributes.is-read')),
        isSynced: this._toZeroOne(get(item, 'attributes.is-synced'), 1),
      };
    },
  };
}
