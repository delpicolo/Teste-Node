const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User
};
