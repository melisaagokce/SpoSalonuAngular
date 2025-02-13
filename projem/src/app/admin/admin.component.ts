import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service'; // AuthService'in yolunu güncelleyin

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrl: 'admin.component.css',
})
export class AdminComponent {

  members = [
    {
      id: 1,
      name: 'Ali Veli',
      email: 'ali@example.com',
      course: 'fitness',
      remainingDays: 30,
    },
    {
      id: 2,
      name: 'Ayşe Yılmaz',
      email: 'ayse@example.com',
      course: 'kardiyo',
      remainingDays: 20,
    },
    {
      id: 3,
      name: 'Mehmet Kara',
      email: 'mehmet@example.com',
      course: 'yoga',
      remainingDays: 15,
    },
  ];
  newMember = { id: 0, name: '', email: '', course: '', remainingDays: 0 };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Values:', this.newMember);
      // Yeni üye nesnesini oluşturun
      const newMember = {
        id: this.members.length + 1, // ID'yi otomatik olarak belirleyin
        name: this.newMember.name,
        email: this.newMember.email,
        course: this.newMember.course,
        remainingDays: this.newMember.remainingDays,
      };
      this.members.push(newMember);
      console.log('Members Array:', this.members);
      // Formu sıfırlayın
      this.newMember = { id: 0, name: '', email: '', course: '', remainingDays: 0 };
      
      form.resetForm(); 
    }
  }
  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
}

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, FormsModule], // Ekleyin
  exports: [AdminComponent],
})
export class AdminModule {

}
