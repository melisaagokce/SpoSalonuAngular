import { Component, NgModule } from '@angular/core';
import { CourseService } from './course.service';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-member-panel',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class MemberPanelComponent {
  userId = 'user123';  
  courses =  [
    { name: 'FİTNESS', duration: 60, price: 5000, image: '../../assets/public/fotolar/8.jpg' },
    { name: 'YOGA', duration: 60, price: 3000, image: '../../assets/public/fotolar/9.jpg' },
    { name: 'SPINNING', duration: 30, price: 4000, image: '../../assets/public/fotolar/10.jpg' },
    { name: 'KARDİYO', duration: 120, price: 7000, image: '../../assets/public/fotolar/11.jpg' }
  ];

  constructor(private courseService: CourseService, private userService: UserService) {}

  addCourse(course: any) {
    this.courseService.addCourse(course);
    this.userService.addCourseToUser(this.userId, course);
  }
  
}


@NgModule({
  declarations: [
    MemberPanelComponent
    // diğer bileşenler
  ],
  imports: [
    CommonModule
    // diğer modüller
  ]
})
export class MemberModule { }
