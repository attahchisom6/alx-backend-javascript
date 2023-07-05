export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: "15",
  location: "Aba",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "ngube",
  age: "17",
  location: "Enugu",
};

const studentsList: Students[] =  [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const varfirstName = row.insertCell();
  const varLocation = row.insertCell();

  varfirstName.textContent = student.firstName;
  varLocation.textContent = student.location;
});

document.body.appendChild(table);
