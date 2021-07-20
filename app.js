const express = require('express'); // express 모듈 추가하기

const app = express();
const port = 80;
const path = require('path');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err) {
  console.log('Connected port - ' + port);
  if (err) {
    return console.log('Found error - ', err);
  }
});

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});