const express = require('express');
const PORT = process.env.PORT;

express()
  .get('/', function(req, res) {
    res.send('hello world from heroku !!\n');
  }).listen(PORT);

console.log('Running on port: ' + PORT);