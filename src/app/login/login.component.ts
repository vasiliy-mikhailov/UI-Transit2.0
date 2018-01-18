import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  apiUrl: String;

  constructor(private authService: AuthService) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {
  }

  signInWithEmailPassword(form) {
    const email: string = form.value.email;
    const password: string = form.value.password;

    this.authService.signInWithEmailAndPassword(email, password);

    form.reset();
  }

  fastSignIn() {
    this.authService.signInWithEmailAndPassword('mikhailov@nsd.ru', '123456');
  }

}
