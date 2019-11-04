const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../../models/User');
const {createToken} = require('../utilities');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');

//@route          POST /api/user
//@description    Creates a new user in db
//@access         public
router.post('/', [
    check('name').isLength({min: 1}).withMessage('Please enter a user name'),
    check('email').isEmail().withMessage('An email address is necessary to register'),
    check('password').isLength({min: 6}).withMessage('Your password needs to be at least 6 characters long')
  ],
  async (req, res) => {
    //handle any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    };

    const {name, email, password} = req.body;

    try {
      //Check if the user name already exists
      const existingUser = await User.findOne({email});
      if (existingUser) {
        return res.status(400).send({errors: [{msg: "A user with that email already exists"}]});
      };
      //Create and save user in db with hashed password
      const newUser = new User({
        name,
        email,
        password
      });

      const savedUser = await newUser.save();

      //Generate token
      const token = await createToken(savedUser._id);
      const user = await User.findById(savedUser._id).select('name');
      res.status(201).send({user, token});
    } catch (err) {
      res.status(400).send(err);
    };
  }
);

//@route          POST /api/user/login
//@description    logs in a user
//@access         public
router.post('/login', [
    check('email').isEmail().withMessage('An email address is necessary to register'),
    check('password').isLength({min: 6}).withMessage('Your password needs to be at least 6 characters long')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    };

    const {email, password} = req.body;

    try {
      //Find user based on email and handle if user is not found
      let user = await User.findOne({email});
      if (!user) {
        return res.status(400).send({errors: [{message: 'User not found'}]});
      };

      //Verify password
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).send({errors: [{message: 'Invalid credentials'}]});
      };

      const token = await createToken(user._id);
      user = await User.findById(user._id).select('name');
      res.status(201).send({user, token});
    } catch (err) {
      res.status(500).send(err);
    };
});

//@route          GET /api/user/authenticate
//@description    returns user's own data
//@access         private
router.get('/authenticate', auth, async (req, res) => {
  try {
    console.log('attempting call to api/user/authenticate')
    res.status(200).send(req.user);
  } catch (err) {
    res.status(400).send({errors: [{msg: "User not found"}]});
  };
});

module.exports = router;
