import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { [id: string]: any } = {};  // Kullanıcıları ve onların kurslarını saklayan obje

  addCourseToUser(userId: string, course: any) {
    if (!this.users[userId]) {
      this.users[userId] = { courses: [] };
    }
    this.users[userId].courses.push(course);
  }

  getUserCourses(userId: string) {
    return this.users[userId]?.courses || [];
  }
}
