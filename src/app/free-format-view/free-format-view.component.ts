import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { saveAs } from 'file-saver';
import { environment } from '../../environments/environment';

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

    const apiUrl = environment.apiUrl;

    this.httpClient.get<any>(apiUrl + '/free_format_messages.json?auth=' + token + '&filter={ "id" : "' + id + '"}')
      .subscribe(
        (freeFormatMessages: any) => {
          this.freeFormatMessage = freeFormatMessages.items[0];
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
