const express = require('express');

const DATABASE = process.argv[2];
const countStudents = require('./3-read_file_async');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', async(req, res) => {
  try {
    const result = await countStudents(DATABASE);
    const introMsg = 'This is the list of our students\n';
    const fullMsg = introMsg + result.join('\n');
    res.send(fullMsg);
  } catch (error) {
      res.send('Page not found!');
  }
});

app.listen(1245, '0.0.0.0');

module.exports = app;
