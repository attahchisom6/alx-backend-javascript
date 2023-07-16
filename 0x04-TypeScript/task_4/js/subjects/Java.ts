namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subjects.Subject {
    getRequirement(): string {
      return "Here is a list of requirments for Java";
    }

    getAvailableTeacher(): string {
      if (
        !this.teacher ||
        this.teacher.experienceTeachingJava === undefined ||
      this.teacher.experienceTeachingJava <= 0) {
          return "No available teacher";
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
