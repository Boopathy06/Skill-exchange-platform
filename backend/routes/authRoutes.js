const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const Otp = require("../models/Otp");

const transporter =
    require("../config/mail");

const router = express.Router();


// =====================
// REGISTER
// =====================

router.post("/register", async (req, res) => {

    try {

        const {
            username,
            email,
            mobile,
            password
        } = req.body;

        // Check duplicate email
        const existingUser =
            await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                success: false,
                message: "Email already exists"

            });

        }

        // Hash password
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // Save user
        await User.create({

            username,
            email,
            mobile,

            password: hashedPassword,

            isVerified: false

        });

        // Generate OTP
        const otp =
            Math.floor(
                100000 +
                Math.random() * 900000
            ).toString();

        console.log("Generated OTP:", otp);

        // Save OTP
        await Otp.create({

            email,

            otp,

            expiresAt:
                new Date(
                    Date.now() +
                    5 * 60 * 1000
                )

        });
 console.log("OTP SAVED");
console.log("SENDING EMAIL...");
        // Send Email
        await transporter.sendMail({

            from: process.env.EMAIL,

            to: email,

            subject:
                "Skill Exchange OTP",

            text:
                `Your OTP is ${otp}`

        });

        res.status(201).json({

            success: true,

            message:
                "OTP sent successfully"

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message:
                "Server Error"

        });

    }

});


// =====================
// VERIFY OTP
// =====================

router.post(
    "/verify-otp",
    async (req, res) => {

        try {

            const {
                email,
                otp
            } = req.body;

            // Find OTP
            const record =
                await Otp.findOne({

                    email,
                    otp

                });

            // Invalid OTP
            if (!record) {

                return res.status(400).json({

                    success: false,

                    message:
                        "Invalid OTP"

                });

            }

            // Expired OTP
            if (
                record.expiresAt <
                new Date()
            ) {

                return res.status(400).json({

                    success: false,

                    message:
                        "OTP Expired"

                });

            }

            // Verify User
            await User.updateOne(

                { email },

                {
                    isVerified: true
                }

            );

            // Delete OTP
            await Otp.deleteOne({

                _id: record._id

            });

            res.status(200).json({

                success: true,

                message:
                    "OTP Verified Successfully"

            });

        } catch (error) {

    console.log("REGISTER ERROR:");
    console.log(error);

    res.status(500).json({

        success: false,
        message: error.message

    });

}

    }
);
router.post("/verify-otp", async (req, res) => {

    try {

        const { email, otp } = req.body;

        const otpRecord =
            await Otp.findOne({ email });

        if (!otpRecord) {

            return res.status(400).json({
                success: false,
                message: "OTP not found"
            });

        }

        if (otpRecord.otp !== otp) {

            return res.status(400).json({
                success: false,
                message: "Invalid OTP"
            });

        }

        await User.findOneAndUpdate(

            { email },

            {
                isVerified: true
            }

        );

        await Otp.deleteOne({ email });

        res.json({

            success: true,

            message:
                "OTP Verified Successfully"

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message:
                "Server Error"

                
        });

    }

});
module.exports = router;