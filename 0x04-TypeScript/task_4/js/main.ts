export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const react: Subjects.React = new Subjects.React();
export const java: Subjects.Java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
  firstName: "Julien";
  lastName: "Barbier";
  experienceTeachingC: 10;
}

if (cpp) {
  console.log("C++");
  console.log(cteacher.getRequirement());
  console.log(cteacher.getAvailableTeacher());
}

if (java) {
  console.log("Java");
  console.log(cteacher.getRequirement());
  console.log(cteacher.getAvailableTeacher());
}

if (react) {
  console.log('React');
  console.log(cteacher.getRequirement());
  console.log(cteacher.getAvailableTeacher());
}
