import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthLoginService {
  userData: any;
  userName;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
  ) {
    this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user.uid;
          this.userName = user.displayName;
          localStorage.setItem('user', JSON.stringify(this.userData));
          localStorage.setItem('username', JSON.stringify(this.userName));

        } else {
          localStorage.setItem('user', null);
        }
      })
    }
    GoogleAuth() {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        this.router.navigate(['home']);
        console.log(localStorage.getItem('user'));
        console.log(localStorage.getItem('username'));
      })
    }

    SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {

      })
      .catch((error) => {
        window.alert('O endereço de e-mail já está sendo usado por outra conta')
      })
  }

  // Login com email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
       
      }).catch((error) => {
        window.alert('Verifique os dados e tente novamente.')
      })
  }
  SignOut() {
    return this.afAuth.auth.signOut()
      .then((result) => {
        localStorage.setItem('user',null);
        localStorage.setItem('username',null);
        this.router.navigate(['']);
      }).catch((error) => {
       
      })
  }
 
        
    
}