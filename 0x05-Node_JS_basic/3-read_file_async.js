const fs = require('fs');

async function countStudents(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      resolve(data);
    });
  });

  return promise.then((data) => {
    const lines = data.split('\n');
    const headerList = ['firstname', 'lastname', 'age', 'field'];
    const headers = lines[0].split(',');

    for (let k = 0; k < headerList.length; k += 1) {
      if (headers[k] !== headerList[k]) {
        throw new Error('Invalid format');
      }
    }

    const studentByField = {};
    for (let k = 1; k < lines.length; k += 1) {
      const fields = lines[k].split(',');
      if (fields.length === 4) {
        const field = fields[3];

        if (!studentByField[field]) {
          studentByField[field] = [];
        }
        studentByField[field].push(fields[0]);
      }
    }

    const count = lines.length - 2;
    console.log(`Number of students: ${count}`);

    for (const field in studentByField) {
      if (field) {
        const list = studentByField[field].join(', ');
        console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${list}`);
      }
    }
  });
}

module.exports = countStudents;
