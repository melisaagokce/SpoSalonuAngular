import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true, 
  imports: [FormsModule,RouterOutlet],
  template:`<div class="appointment-form">
  <h3>Randevu Al</h3>
  <label for="date">Tarih:</label>
  <input type="date" [(ngModel)]="appointmentDate" id="date">
  
  <label for="time">Saat:</label>
  <input type="time" [(ngModel)]="appointmentTime" id="time">
  
  <button (click)="submitAppointment()">Randevu Al</button>
</div>

`,
  styles: ['']
})

  export class AppointmentComponent {
    appointmentDate = '';
    appointmentTime = '';
  
    submitAppointment() {
      // Randevu alma işlemi
      console.log('Randevu Alındı:', this.appointmentDate, this.appointmentTime);
    }
    
  }


