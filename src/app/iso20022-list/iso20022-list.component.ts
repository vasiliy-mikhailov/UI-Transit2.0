import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-iso20022-list',
  templateUrl: './iso20022-list.component.html',
  styleUrls: ['./iso20022-list.component.css']
})
export class Iso20022ListComponent implements OnInit {
  iso20022Messages: Observable<any>;

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

  constructor(private angularFireAuth: AngularFireAuth, private angularFireDatabase: AngularFireDatabase, private router: Router) {
    angularFireAuth.authState.subscribe((auth) => {
        if (auth) {
          console.log('User', auth.email);
        } else {
          router.navigate(['login']);
        }
      }
    );

    this.iso20022Messages = angularFireDatabase.list('/iso_20022_messages').valueChanges();
  }

  ngOnInit() {
  }

}
