const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  }
});

//Hash the password before saving
UserSchema.pre('save', async function() {
  try {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    };
  } catch (err) {
    return err;
  };
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
