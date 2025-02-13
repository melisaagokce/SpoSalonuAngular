import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KayitComponent } from './kayit/kayit.component';
import { IletisimComponent} from './iletisim/iletisim.component';
import { AdresComponent} from './adres/adres.component';

import { AdminComponent } from './admin/admin.component';
import { AuyelerComponent} from './auyeler/auyeler.component'

import { MemberPanelComponent } from './course/member-panel.component';
import { UserPanelComponent } from './user/user-panel.component';
import { AppointmentComponent } from './user/appointment.component';
import { provideRouter } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';



export const routes: Routes = [
  { path: '', pathMatch: 'full',
    component:HomepageComponent
   },
  { path: 'loginpage', component: LoginComponent },
  { path: 'kayit', component: KayitComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: 'adres', component: AdresComponent },
  { path: 'kurslar', component: MemberPanelComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserPanelComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/loginpage', pathMatch: 'full' },
  { path: 'a.uyeler', component: AuyelerComponent },
  { path: '', redirectTo: '/loginpage', pathMatch: 'full' },
  { path: 'randevu', component: AppointmentComponent },
  { path: 'user-panel', component: UserPanelComponent },
  {path: 'hakkimizda', component: HakkimizdaComponent },
  
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
