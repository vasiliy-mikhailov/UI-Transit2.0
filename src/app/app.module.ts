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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import * as firebase from 'firebase/app';
import { DashboardComponent } from './dashboard/dashboard.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCjRqVX4lNFnOnMF7CYSY08Bc2VVYRR_mo",
  authDomain: "transit2-0.firebaseapp.com",
  databaseURL: "https://transit2-0.firebaseio.com",
  projectId: "transit2-0",
  storageBucket: "",
  messagingSenderId: "420403617941"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InFolderComponent,
    OutFolderComponent,
    Iso20022ListComponent,
    FreeFormatListComponent,
    LogoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
