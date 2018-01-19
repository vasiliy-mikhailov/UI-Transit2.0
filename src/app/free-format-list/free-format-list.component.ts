import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-free-format-list',
  templateUrl: './free-format-list.component.html',
  styleUrls: ['./free-format-list.component.css']
})
export class FreeFormatListComponent implements OnInit {
  freeFormatMessages: any;

  columns = [
    { prop: 'id', name: 'id' },
    { prop: 'type', name: 'Тип' },
    { prop: 'direction', name: 'Направление' },
    { prop: 'sender', name: 'Отправитель' },
    { prop: 'recipient', name: 'Получатель' },
    { prop: 'registered', name: 'Зарегистрировано' },
    { prop: 'subject', name: 'Тема' },
    { prop: 'description', name: 'Описание' },
    { prop: 'attachment', name: 'Вложение' },
    { prop: 'state', name: 'Статус' }
  ];

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any[]>(apiUrl + '/free_format_messages.json?auth=' + token)
      .subscribe(
        (freeFormatMessages: any[]) => {
          this.freeFormatMessages = freeFormatMessages;
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
