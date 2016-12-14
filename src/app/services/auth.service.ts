import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Store} from '@ngrx/store'

import * as logon from '../actions/auth.action';
import * as fromRoot from '../reducers';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  userProfile:Object;
  // Configure Auth0
  lock = new Auth0Lock('LrxTeg8Vw7U1A1mPAbe8uUX1r3cKaHSX', 'zpytel.auth0.com', {});

  constructor(private store:Store<fromRoot.State>) {
    this.userProfile=JSON.parse(localStorage.getItem('profile'))
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
     
      
   
     this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        
        let prof=JSON.parse(JSON.stringify(profile));
        this.store.dispatch(new logon.LoginUser
        ({authenticated:true,profile:{
          name:prof.name,
          email:prof.email,
          nick:prof.nickname,
          image:prof.picture
        }}))
        
     });

   });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() :boolean{
    let ret:boolean=false;
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    if(tokenNotExpired){
    ret=tokenNotExpired();
    }
    return ret
  }

  public logout() {
    // Remove token from localStorage
     this.store.dispatch(new logon.LogoutUser({authenticated:false,profile:{
       name:'',
       email:'',
       nick:'',
       image:''
     }}));
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    
  }
}