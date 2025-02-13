import { Component } from '@angular/core';


@Component({
  selector: 'app-courses',
  template: `<div class="courses">
  <h3>Kurslarım</h3>
  <ul>
    <li *ngFor="let course of courses">
      {{course.name}} - Kalan Gün: {{course.daysLeft}}
    </li>
  </ul>
</div>`,
  styleUrls: []
})
export class CoursesComponent {
  courses = [
    { name: 'Angular', daysLeft: 10 },
    { name: 'React', daysLeft: 5 }
  ];

  // Kurslar için diğer metodlar burada olabilir
}
