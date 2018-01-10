import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OutFolderComponent } from './out-folder/out-folder.component';
import { InFolderComponent } from './in-folder/in-folder.component';
import { Iso20022ListComponent } from './iso20022-list/iso20022-list.component';
import { FreeFormatListComponent } from './free-format-list/free-format-list.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Iso20022ViewComponent } from './iso20022-view/iso20022-view.component';
import { FreeFormatViewComponent } from './free-format-view/free-format-view.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'out-folder', component: OutFolderComponent },
  { path: 'iso20022', component: Iso20022ListComponent },
  { path: 'iso20022/:id', component: Iso20022ViewComponent },
  { path: 'free-format', component: FreeFormatListComponent },
  { path: 'free-format/:id', component: FreeFormatViewComponent },
  { path: 'in-folder', component: InFolderComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
