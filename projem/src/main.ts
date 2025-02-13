import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { MyCoursesComponent } from './app/course/my-kurslar.component';
import { UserPanelComponent } from './app/user/user-panel.component';
import { AppointmentComponent } from './app/user/appointment.component';





bootstrapApplication(AppComponent,appConfig
  
)
bootstrapApplication(MyCoursesComponent, {providers: [provideHttpClient()]});

bootstrapApplication(UserPanelComponent, {
    providers: [UserPanelComponent, AppointmentComponent]
  });