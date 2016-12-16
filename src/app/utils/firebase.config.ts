import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig={
    apiKey: "AIzaSyCQzMdQ1jh6QnBGq5wSonLm4qApXghi_Ec",
    authDomain: "ngrxproject.firebaseapp.com",
    databaseURL: "https://ngrxproject.firebaseio.com",
    storageBucket: "ngrxproject.appspot.com"
}


export const firebaseAuthConfig={
    provider:AuthProviders.Google,
    method:AuthMethods.Popup
}