import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-my-courses',
 
  template: `
  
`,
  styleUrls: []
})
export class MyCoursesComponent implements OnInit {
  userId = 'user123';  // Örnek kullanıcı ID'si
  myCourses: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.myCourses = this.userService.getUserCourses(this.userId);
  }
  
}
