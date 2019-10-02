const jwt = require ('jsonwebtoken');
const User = require('../models/User');
const config = require('config');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, config.get('JWTPrivateKey'));
    const user = await User.findOne({})
  } catch (err) {
    res.status(401).send({errors: [{message: 'Please authenticate'}]});
  };
};

module.exports = auth;
