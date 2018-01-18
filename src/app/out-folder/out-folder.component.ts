import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-out-folder',
  templateUrl: './out-folder.component.html',
  styleUrls: ['./out-folder.component.css']
})

export class OutFolderComponent implements OnInit {
  outFiles: any[];

  columns = [
    { prop: 'file_name', name: 'Имя файла' },
    { prop: 'file_date', name: 'Дата создания' }
  ];

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any[]>(apiUrl + '/out_files.json?auth=' + token)
      .subscribe(
        (outFiles: any[]) => {
          this.outFiles = outFiles;
        }
    );
  }

  ngOnInit() {
  }

}
