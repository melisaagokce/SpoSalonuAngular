// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user1', password: 'user123', role: 'user' }
  ];

  login(username: string, password: string): string | null {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // Kullanıcı bilgilerini localStorage'da sakla
      localStorage.setItem('authToken', JSON.stringify(user));
      return user.role;
    }
    return null;
  }
  constructor(private router: Router) { }

  logout(): void {
    // Örneğin, kullanıcı token'ını kaldırabilirsiniz
    localStorage.removeItem('authToken');

    // Kullanıcıyı giriş sayfasına yönlendirin
    this.router.navigate(['/loginpage']);
  }
  getRole(): string | null {
    const user = localStorage.getItem('authToken');
    return user ? JSON.parse(user).role : null;
  }

  // Kullanıcı oturumu var mı kontrol et
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }



}
