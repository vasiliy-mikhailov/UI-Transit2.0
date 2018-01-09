import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.angularFireAuth.auth.signOut().then((res) => {
      this.router.navigate(['']);
    })
      .catch((err) => console.log(err));
  }

  ngOnInit() {

  }
}
