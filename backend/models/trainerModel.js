const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://getdrawings.com/free-icon/person-icon-67.png",
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  gender: {
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

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
