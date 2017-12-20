import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';

export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: {
    stores: {
      'item': '&id,*isNew'
    }
  }
});
