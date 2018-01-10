import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  server_state: any;
  exchange_active: boolean;


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

    this.httpClient.get<boolean>('https://transit2-0.firebaseio.com/exchange_active.json?auth=' + token)
      .subscribe(
        (exchange_active) => {
          this.exchange_active = exchange_active;
        }
      );
  }

  setExchangeState(exchange_active: boolean) {
    const token = this.authService.getToken();

    this.httpClient.put('https://transit2-0.firebaseio.com/exchange_active.json?auth=' + token, exchange_active).subscribe();

    this.exchange_active = exchange_active;
  }


  ngOnInit() {
  }

}
