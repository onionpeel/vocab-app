const mongoose = require('mongoose');
const config = require('config');

const mongoDbUri = config.get('mongoDbUri');

mongoose.connect(mongoDbUri, {useNewUrlParser: true});
