interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = () => "Working from Home";
  getCoffeeBreak = () => "Getting a coffee break";
  workDirectorTasks = () => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  workFromHome = () => "Cannot work from home";
  getCoffeeBreak = () => "Cannot have a break"
  workTeacherTasks = () => " Getting to work";
}

function createEmployee(salary: number | string): TeacherInterface | DirectorInterface {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

const employee1 = createEmployee(200);
console.log(employee1.constructor.name);
const employee2 = createEmployee(500);
console.log(employee2.constructor.name)
const employee3 = createEmployee(1000);
console.log(employee3.constructor.name);

const obj1 = new Teacher();
console.log(obj1.workFromHome());

const obj2 = new Director();
console.log(obj2.workFromHome());

function isDirector(employee: Teacher | Director): boolean {
  return (employee instanceof Director) ? true: false;
}

function executeWork(employee: Teacher | Director) {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

executeWork(employee1);
executeWork(employee3);
