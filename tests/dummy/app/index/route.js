import Route from '@ember/routing/route';

export default class extends Route {
  beforeModel() {
    window.location.href = 'docs';
  }
}
