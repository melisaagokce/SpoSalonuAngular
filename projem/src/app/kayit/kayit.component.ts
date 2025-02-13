import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './user.model';


@Component({
  selector: 'app-kayit',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  template: `
<div class="kayit">
<form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
  <h2 class="login-text">KAYDOL</h2>
  <input type="text" name="name" placeholder="name" ngModel> <br>
  <input type="text" name="surname" placeholder="surname"ngModel> <br>
  <input type="email" name="email" placeholder="email"ngModel> <br>
  <input type="text" name="password" placeholder="password"ngModel> <br>
  <button>KAYDOL</button>

</form>
</div> `,
  styles: [`
   /* Genel stil ayarları */
body {
  background-color: #f0f4f8; /* Açık gri-mavi arka plan */
  font-family: Arial, sans-serif;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.kayit {
  background-color: #002d72; /* Lacivert arka plan */
  color: #ffffff; /* Beyaz metin */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login-text {
  margin-bottom: 20px;
  font-size: 24px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ffffff; /* Beyaz kenarlık */
  border-radius: 4px;
  background-color: #003a7d; /* Lacivert tonlarda arka plan */
  color: #ffffff; /* Beyaz metin */
  text-align: center;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="password"]::placeholder {
  color: #b0bec5; /* Açık gri-mavi placeholder metin */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #004e92; /* Koyu lacivert buton */
  border: none;
  border-radius: 4px;
  color: #ffffff; /* Beyaz metin */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #003e7a; /* Hover durumunda daha koyu lacivert */
}

  

`],
})
export class KayitComponent {
  registerForm: any;
 
  
  onSubmit(formData: any) {
    // Form verilerini bir nesneye kaydet
    const userData = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
    };

    console.log(userData);
  }
}

