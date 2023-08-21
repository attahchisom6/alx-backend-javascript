const fs = require('fs');

function countStudents(path) {
   try {
     const data = fs.readFileSync(path, "utf-8");
   } catch(error) {
     console.log("Cannot load the database");
     let count = 0;
     const lines = data.split('\n');
     headers_list = ["firstname", "lastname", "age", "field"];
     headers = line[0].split(",")
     for (let k = 0; k < header_list.length; k++) {
       if (headers[k] != header_list[k]) {
         throw new error("invalid format");
       }

       const studentByField = {};
       for (let k = 0; k < lines.length; k++) {
         const fields = lines[k].split(",");
         if (fields.length === 4) {
           const field = fields[3];

           if (!studentByField[field]) {
             studentByField[field] = [];
           }
           studentByField[field] = fields[0];
         }
       }

       const count = lines.length - 2;
       console.log(`Number of students: ${count}`)
       for (field in studentByField) {
         const list = studentByField[field].join(", ");
         console.log(`Number of students in FIELD: ${field.length}. List: ${list}`);
       }
     }
   }
};

module.exports = countStudents;
