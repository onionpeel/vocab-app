const mongoose = require('mongoose');
const config = require('config');

const dbConnect = async () => {
  try {
    const mongoDbUri = config.get('mongoDbUri');
    await mongoose.connect(mongoDbUri, {useNewUrlParser: true});
  } catch (err) {
    console.log('Database connection not established');
  };
};

module.exports = dbConnect;
