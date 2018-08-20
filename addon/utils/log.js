import Ember from 'ember';

const {
  testing
} = Ember;

// Log a message, unless in tests (to prevent noisy test output)
export function log() {
  if (!testing) {
    console.log(...arguments); // eslint-disable-line
  }
}
