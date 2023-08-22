const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const header = { 'Content-type': 'text/plain' };
  if (req.url === '/') {
    res.writeHead(200, header);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents('database.csv')
    .then(result => {
      res.writeHead(200, header);
      res.end(`This is the list of our students\n${result}`)
    })
    .catch(error => {
      res.writeHead(500, header);
      res.end('Internal Server Error');
    });
  } else {
    res.writeHead(404, header);
    res.end("Page not found!");
  }
});

app.listen(1245, '0.0.0.0');

module.exports = app;
