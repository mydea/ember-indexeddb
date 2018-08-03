import { click, currentURL, visit, findAll } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupIndexedDb } from 'ember-indexeddb/test-support/helpers/indexed-db';

module('Acceptance | example', function(hooks) {
  setupApplicationTest(hooks);
  setupIndexedDb(hooks);

  test('example app works', async function(assert) {
    await visit('/example');
    assert.equal(currentURL(), '/example');

    let items = findAll('.item');
    assert.equal(items.length, 0, 'no items are found');

    let [dateString1] = (new Date).toISOString().split('.');

    // Add three items
    await click('#add-items');

    items = findAll('.item');
    assert.equal(items.length, 3, 'three items are found');
    assert.deepEqual(
      items.map((item) => item.querySelector('td').innerText.trim()),
      [
        dateString1,
        dateString1,
        dateString1
      ],
      'items have correct dates'
    );

    let [dateString2] = (new Date).toISOString().split('.');

    // Add three items
    await click('#add-items');

    items = findAll('.item');
    assert.equal(items.length, 6, 'three items are found');
    assert.deepEqual(
      items.map((item) => item.querySelector('td').innerText.trim()),
      [
        dateString1,
        dateString1,
        dateString1,
        dateString2,
        dateString2,
        dateString2
      ],
      'items have correct dates'
    );

    // Clean the database
    await click('#reset-db');
  });
});
