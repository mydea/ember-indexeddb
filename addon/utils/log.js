import Ember from 'ember';

// Log a message, unless in tests (to prevent noisy test output)
export function log() {
  // eslint-disable-next-line ember-suave/no-direct-property-access
  if (!Ember.testing) {
    console.log(...arguments); // eslint-disable-line
  }
}
