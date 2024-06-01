const express = require("express");
const {
  signup,
  login,
  getUserDataController,
  updateUserController,
  trainersController,
  getTrainersByUserId,
  //   getSingleUserDataController,
} = require("../controllers/user.controller");
const Trainer = require("../models/trainerModel");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getClickedUserdata/:userId", getUserDataController);
router.put("/updateProfile/:userId", updateUserController);
router.post("/trainers", trainersController);
router.get("/trainers/:userId", getTrainersByUserId);

// router.post("/getSingleUserData", getSingleUserDataController);

module.exports = router;
