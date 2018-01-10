import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  server_state: any;


  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    this.httpClient.get<any[]>('https://transit2-0.firebaseio.com/server_state.json?auth=' + token)
      .subscribe(
        (server_state: any[]) => {
          this.server_state = server_state;
        }
      );
  }


  ngOnInit() {
  }

}
