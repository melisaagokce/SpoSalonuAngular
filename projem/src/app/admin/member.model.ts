export class Member {
    id: number;
    name: string;
    email: string;
    course: string;
    remainingDays: number;
  
    constructor(id: number, name: string, email: string, course: string, remainingDays: number) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.course = course;
      this.remainingDays = remainingDays;
    }
  }