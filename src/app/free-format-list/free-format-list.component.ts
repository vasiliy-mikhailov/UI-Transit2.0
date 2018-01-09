import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-free-format-list',
  templateUrl: './free-format-list.component.html',
  styleUrls: ['./free-format-list.component.css']
})
export class FreeFormatListComponent implements OnInit {
  freeFormatMessages: Observable<any>;

  columns = [
    { prop: 'id', name: 'id' },
    { prop: 'type', name: 'Тип' },
    { prop: 'direction', name: 'Направление' },
    { prop: 'sender', name: 'Отправитель' },
    { prop: 'recipient', name: 'Получатель' },
    { prop: 'registered', name: 'Зарегистрировано' },
    { prop: 'theme', name: 'Тема' },
    { prop: 'description', name: 'Описание' },
    { prop: 'attachment', name: 'Вложение' },
    { prop: 'state', name: 'Статус' }
  ];

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, private router: Router) {
    angularFireAuth.authState.subscribe((auth) => {
        if (auth) {
          console.log('User', auth.email);
        } else {
          router.navigate(['login']);
        }
      }
    );

    this.freeFormatMessages = angularFireDatabase.list('/free_format_messages').valueChanges();
  }

  ngOnInit() {
  }

}
