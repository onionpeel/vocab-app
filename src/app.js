const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('../config/dbConnect');

const app = express();
app.use(bodyParser.json());

dbConnect();

app.use('/api/user', require('./routes/api/user'));
app.use('/api/vocab', require('./routes/api/vocab'));

module.exports = app;
