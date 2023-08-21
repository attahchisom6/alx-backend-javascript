const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    const headerList = ['firstname', 'lastname', 'age', 'field'];
    const headers = lines[0].split(',');
    for (let k = 0; k < headerList.length; k += 1) {
      if (headers[k] !== headerList[k]) {
        throw new Error('invalid format');
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

    // we subtract 2 bcos .csv files have empty lines at the end of the file and we are also
    // excliding the headers in first line
    const count = lines.length - 2;
    console.log(`Number of students: ${count}`);
    for (const field in studentByField) {
      if (field) {
        const list = studentByField[field].join(', ');
        console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${list}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
