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
  const workFromHome = () => "Working from Home";
  const getToWork = () => "Getting a coffee break";
  const workDirectorTasks = () => "Getting to director tasks";
}

class Teacher implements TeacherInterface {
  const workFromHome = () => "Cannot work from home";
  const getCoffeeBreak = () => "Cannot have a break"
  const workTeacherTasks = () => " Getting to work";
}

function createEmployee(salary: number | string) => new Director | new Teacher {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

console.log(createEmployee(200));
console.log(createEmployee(500));
console.log(createEmployee(1000));
