import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";
import { Observable } from "rxjs/Observable";

import { MdSnackBar } from '@angular/material';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth,
              public snackBar: MdSnackBar) { 
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        // this.snackBar.open('Success!', JSON.stringify(value), {
        //   duration: 2000,
        // });
        console.log(value)
      })
      .catch(err => {
        this.snackBar.open('Error!', JSON.stringify(err.message), {
          duration: 2000,
        });
        console.log(err.message)
      })
  } 

  login(email: string, password: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(value => {
      this.snackBar.open('Success!', JSON.stringify(value), {
        duration: 2000,
      });
      console.log(value)
    })
    .catch(err => {
      this.snackBar.open('Error!', JSON.stringify(err.message), {
        duration: 2000,
      });
      console.log(err.message)
    })
  }

  logout() {
    this.firebaseAuth
    .auth
    .signOut();
  }

}
