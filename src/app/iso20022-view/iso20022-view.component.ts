import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-iso20022-view',
  templateUrl: './iso20022-view.component.html',
  styleUrls: ['./iso20022-view.component.css']
})
export class Iso20022ViewComponent implements OnInit {
  iso20022Message: any;

  columns = [
    { prop: 'id', name: 'id' },
    { prop: 'direction', name: 'Направление' },
    { prop: 'registered', name: 'Зарегистрировано' },
    { prop: 'sender', name: 'Отправитель' },
    { prop: 'type', name: 'Тип' },
    { prop: 'state', name: 'Статус' }
  ];

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    const id = route.snapshot.params['id'];

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any[]>(apiUrl + '/iso_20022_messages.json?auth=' + token + '&filter={ "id" : "' + id + '"}')
      .subscribe(
        (iso20022Messages: any[]) => {
          const key = Object.keys(iso20022Messages)[0];

          this.iso20022Message = iso20022Messages[key];
        }
      );
  }

  ngOnInit() {
  }

}
