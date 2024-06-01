const Trainer = require("../models/trainerModel");
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      bio,
      profile,
      phonenumber,
      location,
      instagram,
      twitter,
    } = req.body;
    console.log(req.body);
    const user = await User.findOne({ email });
    const usernamecheck = await User.findOne({ username });
    if (usernamecheck) {
      return res.status(400).json({
        message: "Username already exist",
      });
    }
    if (user) {
      return res.status(400).json({
        message: "User already exist",
      });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createUser = new User({
      username: username,
      email: email,
      password: hashPassword,
      bio: bio,
      profile: profile,
      phonenumber: phonenumber,
      location: location,
      instagram: instagram,
      twitter: twitter,
    });
    await createUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createUser._id,
        username: createUser.username,
        email: createUser.email,
        bio: createUser.bio,
        profile: createUser.profile,
        phonenumber: createUser.phonenumber,
        location: createUser.location,
        instagram: createUser.instagram,
        twitter: createUser.twitter,
      },
    });
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch || !user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    } else {
      res.status(200).json({
        message: "Login Successfully..",
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          bio: user.bio,
          profile: user.profile,
          location: user.location,
          phonenumber: user.phonenumber,
        },
      });
    }
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUserDataController = async (req, res) => {
  const { userId } = req.params;
  console.log("Fetching user data for userId:", userId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("ERROR: " + error.message);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

const updateUserController = async (req, res) => {
  const { userId } = req.params;
  const { username, bio, email, phonenumber, twitter, instagram } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
        bio,
        email,
        phonenumber,
        location,
        twitter,
        instagram,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const trainersController = async (req, res) => {
  const {
    userId,
    name,
    image,
    experience,
    specialization,
    gender,
    instagram,
    twitter,
  } = req.body;

  try {
    const trainer = new Trainer({
      userId,
      name,
      image,
      experience,
      specialization,
      gender,
      instagram,
      twitter,
    });

    await trainer.save();
    res.status(201).json({ message: "Trainer added successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add Trainer" });
  }
};

const getTrainersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const trainers = await Trainer.find({ userId });
    res.status(200).json(trainers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
module.exports = {
  signup,
  login,
  getUserDataController,
  updateUserController,
  trainersController,
  getTrainersByUserId,
};
