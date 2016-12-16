import { Injectable }      from '@angular/core';

import {Store} from '@ngrx/store'
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import * as firebase from 'firebase';

import 'rxjs/add/operator/toPromise';
import {firebaseAuthConfig} from '../utils/firebase.config'



import * as logon from '../actions/auth.action';
import * as fromRoot from '../reducers';

@Injectable()
export class Auth {
 public isAuthenticated = false;
  public displayName: string = '';
  public photoUrl: string = '';
  public email: string = '';
 
  constructor(private store:Store<fromRoot.State>,private af:AngularFire) {
  }


 private storeAuthInfo(authState: FirebaseAuthState) {
   console.log
    if (authState) {
      this.displayName = authState.auth.displayName;
      this.photoUrl = authState.auth.photoURL;
      this.email=authState.auth.email;
      this.isAuthenticated = true;
      if (authState.google) {
        localStorage.setItem('idToken', (authState.google as any).idToken);
        localStorage.setItem('accessToken', (authState.google as any).accessToken);
        this.store.dispatch(new logon.LoginUser
        ({authenticated:true,profile:{
          name:this.displayName,
          email:this.email,
          nick:this.displayName,
          image:this.photoUrl
        }}))
      }
    }
   
  }

   login(): firebase.Promise<FirebaseAuthState> {

    const idToken = localStorage.getItem('idToken');
    const accessToken = localStorage.getItem('accessToken');

    if (idToken && accessToken) {

      const authConfig = {
        method: AuthMethods.OAuthToken,
        provider: AuthProviders.Google
      };
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
       this.af.auth.login(credential, authConfig).then((authState) => {
        console.log("Successful Token-based Login");
         this.storeAuthInfo(authState);
      }).catch((err) => {
        console.log("Error with auth token: " + err, " Clearing cached token..");
       
        this.logoutStore();
      });
    } else {
      // fall through to popup auth
      return this.af.auth.login({
        method: AuthMethods.Popup
      }).then((authState) => {
        console.log("Successful OAuth-based Login");
        return this.storeAuthInfo(authState);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  logout() {
     this.logoutStore()
    this.af.auth.logout();
  }

  logoutStore(){
this.store.dispatch(new logon.LogoutUser({authenticated:false,profile:{
       name:'',
       email:'',
       nick:'',
       image:''
     }}));


    localStorage.setItem('idToken', '');
    localStorage.setItem('accessToken', '');
  }


}
      
   
 