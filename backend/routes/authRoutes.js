const express = require("express");

const router = express.Router();

router.post("/register", (req, res) => {

    console.log(req.body);

    res.status(201).json({
        success: true,
        message: "Registration received"
    });

});

module.exports = router;