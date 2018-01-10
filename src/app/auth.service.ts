import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {
  }

  signInWithEmailAndPassword(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => {
              this.token = token;
            }
          );

        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));
  }

  signOut() {
    firebase.auth().signOut()
      .then(response => {
        this.token = null;

        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUserEMail(): String {
    return firebase.auth().currentUser.email;
  }

}
