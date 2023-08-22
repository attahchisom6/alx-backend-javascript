const http = require('http');

const app = http.createServer((req, res) => {
  const header = {'Content-Type': 'text/plain'};
  res.writeHead(200, header);
  res.end('Hello Holberton School!');
});

app.listen('1245');

module.exports = app;

