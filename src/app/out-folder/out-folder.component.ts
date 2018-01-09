import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-out-folder',
  templateUrl: './out-folder.component.html',
  styleUrls: ['./out-folder.component.css']
})
export class OutFolderComponent implements OnInit {
  outFiles: Observable<any>;

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

    this.outFiles = angularFireDatabase.list('/out_files').valueChanges();
  }

  ngOnInit() {
  }

}
