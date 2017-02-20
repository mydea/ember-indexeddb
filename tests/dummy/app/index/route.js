import Ember from 'ember';

const {
  Route
} = Ember;

export default Route.extend({

  beforeModel() {
    window.location.href = 'docs';
  }

});
