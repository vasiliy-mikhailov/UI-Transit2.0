import 'core-js';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCjRqVX4lNFnOnMF7CYSY08Bc2VVYRR_mo",
      authDomain: "transit2-0.firebaseapp.com"
    });
  }

  constructor(public authService: AuthService) {

  }
}
