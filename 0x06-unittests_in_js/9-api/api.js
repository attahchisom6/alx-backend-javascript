const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get(`/cart/:id`, (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(404).send('Invalid id');
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.listen(7865, '0.0.0.0', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
