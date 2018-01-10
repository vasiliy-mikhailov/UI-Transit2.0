import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  server_state: Observable<any>;


  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, private router: Router) {
    angularFireAuth.authState.subscribe((auth) => {
        if (auth) {
          console.log('User', auth.email);
        } else {
          router.navigate(['login']);
        }
      }
    );

    this.server_state = angularFireDatabase.object('/server_state').valueChanges();
  }


  ngOnInit() {
  }

}
