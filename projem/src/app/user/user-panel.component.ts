import { Component, NgModule, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { RouterOutlet } from '@angular/router';
import { AppointmentComponent } from './appointment.component';




@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AppointmentComponent],
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  
  constructor(private authService: AuthService) { }

  logout(): void {
    this.authService.logout();
  }
  showAppointmentForm = false;

  toggleAppointmentForm() {
    this.showAppointmentForm = !this.showAppointmentForm;
  }
}


export class UserPanelModule {
  
}  
