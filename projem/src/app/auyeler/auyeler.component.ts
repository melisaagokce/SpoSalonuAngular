// user.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-auyeler',
  templateUrl: 'auyeler.component.html',
  styleUrl: 'auyeler.component.css'
})
export class AuyelerComponent {
  courses = [
    { name: 'Angular', remainingDays: 30 },
    { name: 'React', remainingDays: 45 }
  ];

  availableCourses = [
    
  ];

  buyCourse(course: any) {
    this.courses.push({ ...course, remainingDays: 60 });
  }
}
