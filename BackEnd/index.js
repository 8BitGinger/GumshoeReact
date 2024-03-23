'use strict';
const express = require('express');
const app = express();
const port = process.env.port || 4444;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, (err) => {
  if (err) {
    return console.log('Error: ', err);
  }
  console.log(`Server is listening on ${port}`);
});
