import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: any[] = [];  // Satın alınan kursları tutan dizi

  addCourse(course: any) {
    this.courses.push(course);
  }

  getCourses() {
    return this.courses;
  }
}
