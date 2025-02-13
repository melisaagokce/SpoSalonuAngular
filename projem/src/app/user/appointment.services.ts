import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from './appointment.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  addAppointment(appointment: Appointment): Observable<Appointment> {
    appointment.id = this.appointments.length + 1;
    this.appointments.push(appointment);
    return of(appointment);
  }

  deleteAppointment(id: number): Observable<void> {
    this.appointments = this.appointments.filter(app => app.id !== id);
    return of();
  }
}
