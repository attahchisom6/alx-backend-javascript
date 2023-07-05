interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

class TeacherImpl implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = true;
    this.location = '';
  }
}

// Create directory task_1 and copy configuration files
const fs = require('fs');
const path = require('path');

const directory = 'task_1';
fs.mkdirSync(directory);
const filesToCopy = ['package.json', 'tsconfig.json', 'webpack.config.js'];
filesToCopy.forEach((file) => {
  fs.copyFileSync(file, path.join(directory, file));
});

// Test the implementation
const teacher3: Teacher = new TeacherImpl('John', 'Doe');
teacher3.fullTimeEmployee = false;
teacher3.location = 'London';
teacher3.contract = false;

console.log(teacher3);
