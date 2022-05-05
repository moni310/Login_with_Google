const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"User name is required"]
  },
  email: {
    type: String,
    required: [true,"email is required"],
  },


});

module.exports = mongoose.model('user', UserSchema);
