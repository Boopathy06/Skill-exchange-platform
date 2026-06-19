const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {

  try {

    const {
      username,
      email,
      mobile,
      password
    } = req.body;

    const user = await User.create({
      username,
      email,
      mobile,
      password
    });

    res.status(201).json({
      success: true,
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Registration Failed"
    });

  }

});

module.exports = router;