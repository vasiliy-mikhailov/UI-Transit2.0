import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    this.httpClient.get<any[]>('https://transit2-0.firebaseio.com/iso_20022_messages.json?auth=' + token)
      .subscribe(
        (iso20022Messages: any[]) => {
          this.iso20022Messages = iso20022Messages;
        }
      );
  }

  onSelect($event) {
    console.log($event);
  }

  ngOnInit() {
  }

}
