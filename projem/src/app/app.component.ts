import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from '../app/app.routes';
import { LoginComponent } from "./login/login.component";
import { KayitComponent } from "./kayit/kayit.component";
import { IletisimComponent } from "./iletisim/iletisim.component";
import { AdresComponent} from './adres/adres.component';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './user/appointment.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule, RouterModule,AppointmentComponent, LoginComponent,KayitComponent,IletisimComponent,AdresComponent],
  template: `<div class="menu">
  <ul>
      <li><img src="assets/public/fotolar/2.jpg" alt="" width="80px" height="45px" /></li>
      <li><a routerLink="">Anasayfa</a></li>
      <li><a routerLink="iletisim">İletişim</a></li> 
              <li><a routerLink="adres">Adres</a></li>
      <li><a routerLink="hakkimizda">Grup Dersleri</a></li>
      <li><a routerLink="kurslar">Kurslara kayıt</a></li>
  </ul>
  <ul class="right"> <!-- Sağ tarafa yerleştirilmiş öğeler -->
      <li class="giris"><a routerLink="loginpage">Giriş Yap</a></li>
      <li class="kayit"><a routerLink="kayit">Üye ol</a></li>
  </ul>
</div><br>
<router-outlet>

</router-outlet>`,

})

export class AppComponent {
  title = 'projem';
}
