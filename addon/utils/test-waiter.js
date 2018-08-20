import { registerWaiter as registerWaiterFunc, unregisterWaiter as unregisterWaiterFunc } from '@ember/test';
import Ember from 'ember';

const {
  testing
} = Ember;

// Wrap these, so they are only called when testing
export function registerWaiter() {
  if (testing) {
    return registerWaiterFunc(...arguments);
  }
}

export function unregisterWaiter() {
  if (testing) {
    return unregisterWaiterFunc(...arguments);
  }
}
