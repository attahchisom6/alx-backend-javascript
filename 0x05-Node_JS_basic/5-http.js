const http = require('http');
const args = process.argv.slice(2);
const DATABASE = args[0];
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  const header = { 'Content-type': 'text/plain' };
  if (req.url === '/') {
    res.writeHead(200, header);
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students')
    try {
      const result = await countStudents(DATABASE);
    res.writeHead(200, header);
    res.end(`${result.join('\n')}`)
    } catch(error) {
      res.writeHead(404, header);
      res.end("Page not found!");
    }
  }
  res.end();
});

app.listen(1245, '0.0.0.0');

module.exports = app;
