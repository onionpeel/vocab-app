const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('../config/dbConnect');
const path = require('path');

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'index.html'));
  // });
};

module.exports = app;
