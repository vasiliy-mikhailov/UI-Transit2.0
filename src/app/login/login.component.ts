import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
  }

  signInWithEmailPassword(form) {
    let email: string = form.value.email;
    let password: string = form.value.password;

    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));

    form.reset();
  }

  fastSignIn() {
    this.angularFireAuth.auth.signInWithEmailAndPassword('mikhailov@nsd.ru', '123456')
      .then((res) => {
        this.router.navigate(['']);
      })
      .catch((err) => console.log(err));
  }

}
