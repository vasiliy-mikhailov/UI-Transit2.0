import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-in-folder',
  templateUrl: './in-folder.component.html',
  styleUrls: ['./in-folder.component.css']
})
export class InFolderComponent implements OnInit {
  inFiles: Observable<any>;

  columns = [
    { prop: 'file_name', name: 'Имя файла' },
    { prop: 'file_date', name: 'Дата создания' }
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

    this.inFiles = angularFireDatabase.list('/in_files').valueChanges();
  }

  ngOnInit() {
  }

}
