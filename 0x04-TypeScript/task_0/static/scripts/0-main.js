"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 15,
    location: "Aba",
};
var student2 = {
    firstName: "Mary",
    lastName: "ngube",
    age: 17,
    location: "Enugu",
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var varfirstName = row.insertCell();
    var varLocation = row.insertCell();
    varfirstName.textContent = student.firstName;
    varLocation.textContent = student.location;
});
document.body.appendChild(table);
