const http = require('http');
const countStuents = requite('./3-read_file_async');

const app = http.createServer((req, res) => {
  const header = { 'Content-type': 'text/plain' };
  if (req.request === '/') {
    res.writeHead(200, header);
    res.end('Hello Holberton School!');
  } else if req.request === '/students') {
      const result = countStudents('database.csv').then(() => {
        console.log('After');
      })
  .catch(error => {
    throw new Error('error');
  });
  res.end(`This is the list of our students\n${result}`);
});

app.listen(1245, '0.0.0.0');

module.exports = app;
