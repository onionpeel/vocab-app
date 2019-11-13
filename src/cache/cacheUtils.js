const client = require('./client');
const {promisify} = require('util');

const redisGet = promisify(client.get).bind(client);
const redisSet = promisify(client.set).bind(client);

module.exports = {
  redisGet,
  redisSet
};
