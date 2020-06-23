import { set } from '@ember/object';
import { run } from '@ember/runloop';
import wait from 'ember-test-helpers/wait';

/**
 * ## Test Helpers
 *
 * This test helper can be used to interact with the database in your tests.
 * It works with the new test syntax, and can be used in all styles of tests (e.g. acceptance, integration, unit).
 *
 * ```js
 * import { setupIndexedDb } from 'ember-indexeddb/test-support/helpers/indexed-db';
 *
 * module('Acceptance | my test', function(hooks) {
 *  setupApplicationTest(hooks);
 *  setupIndexedDb(hooks);
 *
 *   // add your actual tests here
 * });
 * ```
 *
 * This will setup & open a randomly named database for this test, and close & delete it again after the test.
 *
 * @module Test Helpers
 * @public
 */
export function setupIndexedDb(hooks) {
  hooks.beforeEach(function () {
    let indexedDb = this.owner.lookup('service:indexed-db');
    set(indexedDb, 'databaseName', `test-indexed-db-${+new Date()}`);

    return indexedDb.setupTask.perform();
  });

  hooks.afterEach(async function () {
    let indexedDb = this.owner.lookup('service:indexed-db');
    await wait();
    await run(() => indexedDb.waitForQueueTask.perform());
    await run(() => indexedDb.waitForQueueTask.perform());
    await indexedDb.dropDatabaseTask.perform();
  });
}

export default setupIndexedDb;
