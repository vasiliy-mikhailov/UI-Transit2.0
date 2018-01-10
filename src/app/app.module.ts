import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { InFolderComponent } from './in-folder/in-folder.component';
import { OutFolderComponent } from './out-folder/out-folder.component';
import { Iso20022ListComponent } from './iso20022-list/iso20022-list.component';
import { FreeFormatListComponent } from './free-format-list/free-format-list.component';
import { LogoutComponent } from './logout/logout.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Iso20022ViewComponent } from './iso20022-view/iso20022-view.component';
import { FreeFormatViewComponent } from './free-format-view/free-format-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InFolderComponent,
    OutFolderComponent,
    Iso20022ListComponent,
    FreeFormatListComponent,
    LogoutComponent,
    DashboardComponent,
    Iso20022ViewComponent,
    FreeFormatViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
