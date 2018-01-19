import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  token: string;
  email: string;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  signInWithEmailAndPassword(email: string, password: string) {
    const apiUrl = environment.apiUrl;

    this.httpClient.get<any>(apiUrl + '/login.json?email=' + email + '&password_md5=' + Md5.hashStr(password))
      .subscribe(
        (response: any) => {
          this.token = response.items[0].token;
          this.email = response.items[0].email;

          this.router.navigate(['']);
        }
      );
  }

  signOut() {
    const apiUrl = environment.apiUrl;

    this.httpClient.get<any>(apiUrl + '/logout.json?auth=' + this.token)
      .subscribe(
        (response: any) => {
          this.token = null;
          this.email = null;
          this.router.navigate(['']);
        }
      );
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  getUserEMail(): String {
    return this.email;
  }

}
