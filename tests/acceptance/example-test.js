import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import { click, findAll } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | example');

test('example app works', async function(assert) {
  await visit('/example');
  assert.equal(currentURL(), '/example');

  // Ensure the DB is cleared
  await click('#reset-db');

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
});
