interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [keyName: string]: any,
};

class TeacherClass implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number | undefined;
    location: string;
    [keyName: string]: any;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = false;
        this.location = '';
    }
}

const Teacher3: Teacher = new TeacherClass('john', 'Doe');
Teacher3.fullTimeEmployee = false;
Teacher3.location = 'London';
console.log(Teacher3);

interface Directors extends Teacher {

    numberOfReports: number,
}

const Director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

console.log(Director1);

function printTeacher(firstName, lastName) {
  console.log(`${firstName[0]} . ${lastName}`);
}

interface printTeacherFunction: printTeacher;
