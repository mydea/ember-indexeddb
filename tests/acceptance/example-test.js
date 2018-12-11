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

    await click('[data-test-row]:nth-child(1) [data-test-mark-as-read]');

    assert.dom('[data-test-row]:nth-child(1) [data-test-is-read]').hasText('true');

    // Clean the database
    await click('#reset-db');
  });

  test('model-bulk-save mixin works', async function(assert) {
    await visit('/example');

    // Manually create some models
    let store = this.owner.lookup('service:store');
    let item = store.createRecord('item', { title: 'item a' });
    let item2 = store.createRecord('item', { title: 'item b' });

    assert.equal(item.currentState.stateName, 'root.loaded.created.uncommitted', 'state of item 1 is correct before saving');
    assert.equal(item2.currentState.stateName, 'root.loaded.created.uncommitted', 'state of item 2 is correct before saving');
    assert.deepEqual(Object.keys(item.changedAttributes()), ['title'], 'changedAttributes of item 1 are correct before saving');
    assert.deepEqual(Object.keys(item2.changedAttributes()), ['title'], 'changedAttributes of item 2 are correct before saving');

    item.saveBulk();
    await item2.saveBulk();

    assert.equal(item.currentState.stateName, 'root.loaded.saved', 'state of item 1 is correct after saving');
    assert.equal(item2.currentState.stateName, 'root.loaded.saved', 'state of item 2 is correct after saving');
    assert.deepEqual(Object.keys(item.changedAttributes()), [], 'changedAttributes of item 1 are correct after saving');
    assert.deepEqual(Object.keys(item2.changedAttributes()), [], 'changedAttributes of item 2 are correct after saving');

    // Clean the database
    await click('#reset-db');
  });
});
