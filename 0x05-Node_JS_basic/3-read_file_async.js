const fs = require('fs');

async function countStudents(path) {
  try {
    const promise = new Promise(path, (resolve, reject) => {
      const data = fs.readFile(path, 'utf-8');
      if (!data) {
        reject("the database has no content");
      }
      resolve(data);
    })
  } catch (error) {
    throw new Error("Cannot read from the database");
  }

  promise.then(data => {
    lines = data.split("\n");
    headerList = ["firstname", "lastname", "age", "field"];
    headers = lines[0].split(",");

    for (let k = 0; k < headerList.length; k += 1) {
      if (headers[k] !== headerList[k]) {
        throw new Error("Invalid format");
      }

      const count = lines.length - 2;
      console.log(`Number of students: ${count}`);

      studentByField = {};
      for (let k = 1; k < lines.length; k += 1) {
        const fields = lines[k].split(",");
        if (fields.length === 4) {
          const field = fields[3];

          if (!studentByField[field]) {
            studentByField[field] = [];
          }
          studentByField[field].push(fields[0]);
        }
      }

      for (const field in studentByField) {
        if (field) {
          const list = studentByField[field].join(",");
          console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${list}`);
        }
      }
    }
  });
  return promise
});
