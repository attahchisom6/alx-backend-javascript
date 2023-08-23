const fs = require('fs');

async function readData(path) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const resolveToFirstname = [];
      const lines = data.split('\n');
      const headerList = ['firstname', 'lastname', 'age', 'field'];
      const headers = lines[0].split(',');

      for (let k = 0; k < headerList.length; k += 1) {
        if (headers[k] !== headerList[k]) {
          throw new Error('Invalid format');
        }
      }

      for (let k = 1; k < lines.length; k += 1) {
        const fields = lines[k].split(',');
        if (fields.length === 4) {
          const field = fields[0];

          if (!field) {
            return;
          }
          resolveToFirstname.push(field);
        }
      }
      resolve(resolveToFirstname);
    });
  });
  return promise;
}

module.exports = countStudents;
