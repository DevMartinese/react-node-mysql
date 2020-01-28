import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../fireabaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);


class Login extends Component{

  render(){
      const { user, signOut, signInWithGoogle } = this.props;
      return(
        <div>
          {
            user ? 
            <div>
              <p>Hola, {user.displayName} </p>
              <button onClick={signOut}>Cerrar sesion</button>
            </div>
            : 
            <div>
              <button onClick={signInWithGoogle}>Iniciar sesion</button>
            </div>
          }
        </div>       
      )
  }

}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);