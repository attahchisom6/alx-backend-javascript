const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, '0.0.0.0', () => {
  console.log('Running server on all port, host: localhost');
});

module.exports = app;
