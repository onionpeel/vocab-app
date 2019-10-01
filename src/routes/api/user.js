const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const User = require('../../models/User');
const {createToken} = require('../utilities');

//@route          POST /api/user
//@description    Creates a new user in db
//@access         public
router.post('/', [
    check('name').isLength({min: 1}),
    check('email').isEmail(),
    check('password').isLength({min: 6})
  ],
  async (req, res) => {
    //handle any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({errors: errors.array()});
    };

    const {name, email, password} = req.body;

    try {
      //Create and save user in db with hashed password
      const newUser = new User({
        name,
        email,
        password
      });

      // const user = await newUser.save().select('-password');
      const savedUser = await newUser.save();

      //Generate token
      const token = await createToken(savedUser._id.toString());
      const user = await User.findById(savedUser._id).select('-password');
      res.status(201).send({user, token});
    } catch (err) {
      res.status(400).send(err);
    };
  }
);

module.exports = router;
