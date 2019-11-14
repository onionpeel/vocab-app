const mongoose = require('mongoose');
const config = require('config');

const dbConnect = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || config.get('mongoDbUri');
    await mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (err) {
    console.log('Database connection not established');
  };
};

module.exports = dbConnect;
