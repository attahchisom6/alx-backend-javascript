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

console.log(createEmployee(200));
console.log(createEmployee(500));
console.log(createEmployee(1000));

const obj1 = new Teacher();
console.log(obj1.workFromHome());

const obj2 = new Director();
console.log(obj2.workFromHome());
