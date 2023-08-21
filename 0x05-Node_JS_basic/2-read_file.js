const fs = require('fs');

function countStudents(path) {
   try {
     const data = fs.readFileSync(path, "utf-8");
     let count = 0;
     const lines = data.split('\n');
     headerList = ["firstname", "lastname", "age", "field"];
     headers = lines[0].split(",");
     for (let k = 0; k < headerList.length; k++) {
       if (headers[k] != headerList[k]) {
         throw new error("invalid format");
       }

       const studentByField = {};
       for (let k = 1; k < lines.length; k++) {
         const fields = lines[k].split(",");
         if (fields.length === 4) {
           const field = fields[3];

           if (!studentByField[field]) {
             studentByField[field] = [];
           }
           studentByField[field].push(fields[0]);
         }
       }

       const count = lines.length - 2;
       console.log(`Number of students: ${count}`)
       for (const field in studentByField) {
         const list = studentByField[field].join(", ");
         console.log(`Number of students in ${field}: ${studentByField[field].length}. List: ${list}`);
       }
     }
   } catch(error) {
     console.error(error);
   }
}
module.exports = countStudents;
