import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';

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
        id: this._toString(item.id),
        json: this._cleanObject(item),
        isRead: this._toZeroOne(item.attributes?.['is-read']),
        isSynced: this._toZeroOne(item.attribtues?.['is-synced'], 1),
      };
    },
  };
}
