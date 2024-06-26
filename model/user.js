const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  userType: String,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);