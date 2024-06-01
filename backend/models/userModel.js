const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: [3, "Username must contain at least 3 characters."],
    maxLength: [30, "Username must be less than 30 characters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "https://getdrawings.com/free-icon/woman-profile-icon-68.png",
  },
  phonenumber: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digits."],
    maxLength: [10, "Phone number must contain 10 digits."],
  },
  location: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
