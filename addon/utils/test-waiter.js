/* eslint-disable ember-suave/no-direct-property-access */
import { registerWaiter as registerWaiterFunc, unregisterWaiter as unregisterWaiterFunc } from '@ember/test';
import Ember from 'ember';

// Wrap these, so they are only called when testing
export function registerWaiter() {
  if (Ember.testing) {
    return registerWaiterFunc(...arguments);
  }
}

export function unregisterWaiter() {
  if (Ember.testing) {
    return unregisterWaiterFunc(...arguments);
  }
}
