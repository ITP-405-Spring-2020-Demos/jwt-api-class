import Route from '@ember/routing/route';

export default class PlaylistsRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:8080/api/playlists');
    // let json = await response.json();
    // return json;
    return response.json();
  }
}
