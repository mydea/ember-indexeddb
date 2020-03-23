import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
import { computed } from '@ember/object';

/**
 * This holds the configuration for your database.
 * Add the initial configuration to the `version` config.
 * However, please note that once run, you cannot change a version (unless you remove the database, e.g. in development)
 *
 * If you need to update your database, e.g. adding a table, you need to add a new version.
 * To do that, you need to increment the `currentVersion` property (e.g. to `2`).
 * Then, you need to add a new property to the service, called `versionX`, where `X` is your new version.
 *
 * This ONLY needs to contain new/changed tables.
 *
 * A full example configuration after some time of use could look like this:
 *
 * ```
 * export default IndexedDbConfigurationService.extend({
    currentVersion: 2,
    version1: computed(function() {
      return {
        stores: {
          'project': '&id',
          'todo': '&id'
        }
      };
    }),
    version2: computed(function() {
      return {
        stores: {
          'tag': '&id'
        }
      };
    })
  });
 * ```
 *
 * For more information, please see https://mydea.github.io/ember-indexeddb/docs/modules/Configuring%20your%20database.html
 */
export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: computed(function () {
    return {
      stores: {
        // Add your tables here, like this: 'item': '&id'
        // When using the ember data adapter, add one entry per model, where the key is your model name
        // For example, if you have a model named "my-item", add an entry: `'my-item': '&id'
      },
    };
  }),
});
