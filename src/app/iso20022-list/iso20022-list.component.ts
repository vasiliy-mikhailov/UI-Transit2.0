import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-iso20022-list',
  templateUrl: './iso20022-list.component.html',
  styleUrls: ['./iso20022-list.component.css']
})
export class Iso20022ListComponent implements OnInit {
  iso20022Messages: any[];

  columns = [
    { prop: 'id', name: 'id' },
    { prop: 'type', name: 'Тип' },
    { prop: 'direction', name: 'Направление' },
    { prop: 'sender', name: 'Отправитель' },
    { prop: 'recipient', name: 'Получатель' },
    { prop: 'state', name: 'Статус' },
    { prop: 'registered', name: 'Зарегистрировано' },
    { prop: 'theme', name: 'Тема' },
    { prop: 'description', name: 'Описание' },
    { prop: 'recipient_destination', name: 'ТКД' }
  ];

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any[]>(apiUrl + '/iso_20022_messages.json?auth=' + token)
      .subscribe(
        (iso20022Messages: any[]) => {
          this.iso20022Messages = iso20022Messages;
        }
      );
  }

  onSelect($event) {
    const id = $event.selected[0].id;

    this.router.navigate([this.route.url, id]);
  }

  ngOnInit() {
  }

}
