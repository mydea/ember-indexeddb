import Ember from 'ember';

// Log a message, unless in tests (to prevent noisy test output)
export function log() {
  if (!Ember.testing) {
    console.log(...arguments); // eslint-disable-line
  }
}
