import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-free-format-view',
  templateUrl: './free-format-view.component.html',
  styleUrls: ['./free-format-view.component.css']
})
export class FreeFormatViewComponent implements OnInit {
  freeFormatMessage: any;

  constructor(private authService: AuthService, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) {
    if (!this.authService.isAuthenticated()) {
      router.navigate(['login']);

      return;
    }

    const token = this.authService.getToken();

    const id = route.snapshot.params['id'];

    this.httpClient.get<any[]>('https://transit2-0.firebaseio.com/free_format_messages_details.json?auth=' + token + '&orderBy="id"&equalTo="' + id + '"')
      .subscribe(
        (freeFormatMessages: any[]) => {
          console.log(freeFormatMessages);

          const key = Object.keys(freeFormatMessages)[0];

          this.freeFormatMessage = freeFormatMessages[key];
        }
      );
  }

  downloadHeader() {
    const data = this.freeFormatMessage.header;
    saveAs(new Blob([data], { type: 'application/octet-stream' }), 'header.txt');
  }

  downloadBinary() {
    const fileName: string = this.freeFormatMessage.attachment;
    const data = this.freeFormatMessage.binary;

    saveAs(new Blob([data], { type: 'application/octet-stream' }), fileName);
  }

  ngOnInit() {
  }

}
