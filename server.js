'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static('build'));
app.get('/', function(req, res) {
  res.sendfile('./build/index.html');
});

app.listen(3000);
