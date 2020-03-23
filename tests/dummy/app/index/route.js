import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    window.location.href = 'docs';
  },
});
