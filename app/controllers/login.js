import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginController extends Controller {
  @tracked error;

  // TODO: remove from production
  @tracked username = 'dtang';
  @tracked password = 'password';

  @action
  async login(event) {
    event.preventDefault();

    this.error = null;

    const response = await fetch('http://localhost:8080/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password
      })
    });

    if (response.ok) {
      const json = await response.json();
      localStorage.token = json.token;
      this.transitionToRoute('playlists');
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
