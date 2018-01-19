import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any>(apiUrl + '/server_state.json?auth=' + token)
      .subscribe(
        (server_state: any) => {
          this.server_state = server_state.items[0];

          console.log(server_state);
        }
      );
  }

  setExchangeState(exchange_active: boolean) {
    const token = this.authService.getToken();

    const apiUrl = environment.apiUrl;

    this.httpClient.put(
      apiUrl + '/exchange_active.json?auth=' + token, '{ "exchange_active" : ' + exchange_active + '}'
      , { headers: {'Content-Type':'application/json; charset=utf-8'}})
      .subscribe();

    this.server_state.exchange_active = exchange_active;
  }


  ngOnInit() {
  }

}
