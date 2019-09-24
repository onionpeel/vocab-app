const express = require('express');
const router = express.Router();
const User = require('../../models/User');

//@route          POST /api/user
//@description    Creates a new user in db
//@access         public
router.post('/', async (req, res) => {
  let user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  };
});


module.exports = router;
