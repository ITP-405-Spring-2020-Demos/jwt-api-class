import Route from '@ember/routing/route';

export default class PlaylistsRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:8080/api/playlists', {
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    });

    if (response.status === 401) {
      this.transitionTo('login');
    } else {
      return response.json();
    }
  }
}
