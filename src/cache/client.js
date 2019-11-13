const REDIS_PORT = process.env.REDIS_URL || 6379;

module.exports = require('redis').createClient(REDIS_PORT);
