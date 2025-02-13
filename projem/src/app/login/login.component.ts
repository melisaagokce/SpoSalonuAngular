import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  template: `
    <div class="giris">
      <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
        <h2 class="login-text">GİRİŞ YAP</h2>
        <input type="text" name="name" placeholder="name" ngModel> <br>
        <input type="password" name="password" placeholder="password" ngModel> <br>
        <button>GİRİŞ YAP</button>
      </form>
    </div>
  `,
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

.giris {
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
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(data: { name: string; password: string }) {
    const role = this.authService.login(data.name, data.password);
    if (role === 'admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'user') {
      this.router.navigate(['/user']);
    } else {
      alert('Geçersiz kullanıcı adı veya şifre');
    }
  }
}