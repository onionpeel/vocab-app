const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('../config/dbConnect');

const app = express();
app.use(bodyParser.json());

dbConnect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/user', require('./routes/api/user'));
app.use('/api/vocab', require('./routes/api/vocab'));

module.exports = app;
