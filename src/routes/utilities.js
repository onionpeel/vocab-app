const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

const createToken = async userId => {
  try {
    const payload = {
      user: {
        id: userId
      }
    };
    const token = await jwt.sign(payload, config.get('JWTPrivateKey'));
    return token;
  } catch (err) {
    return err;
  };
};

module.exports = {
  createToken
};
