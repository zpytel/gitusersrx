import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {}from 'auth0-lock';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('LrxTeg8Vw7U1A1mPAbe8uUX1r3cKaHSX', 'zpytel.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      console.log(authResult)
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}