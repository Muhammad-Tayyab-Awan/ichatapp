/* eslint-disable no-undef */
import express from "express";
import User from "../models/Users.js";
import OTP from "../models/OTP.js";
import bcrypt from "bcryptjs";
import { body, param, validationResult } from "express-validator";
import transporter from "../utils/mailTransporter.js";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

const router = express.Router();
router.post(
  "/register",
  [
    body("username")
      .isString()
      .matches(/^[a-z0-9]{6,15}$/),
    body("firstName")
      .isString()
      .matches(/^[A-Z][a-z]{3,20}$/),
    body("lastName")
      .isString()
      .matches(/^[A-Z][a-z]{3,30}$/),
    body("gender").isString().isIn(["male", "female"]),
    body("email").isEmail(),
    body("password")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 3,
        minNumbers: 2,
        minSymbols: 1,
        minUppercase: 2,
      })
      .isLength({ min: 8, max: 15 }),
    body("birthdate").isISO8601({ strict: true, strictSeparator: true }),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: "Validation Error",
          message: result.errors,
        });
      }
      const {
        username,
        firstName,
        lastName,
        birthdate,
        email,
        password,
        gender,
      } = req.body;
      const usernameExist = await User.findOne({ username });
      const emailExist = await User.findOne({ email });
      if (usernameExist || emailExist) {
        return res.status(400).json({
          success: false,
          error: "User Already Exists",
          message: "User Already Exists",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        firstName,
        lastName,
        birthdate,
        email,
        password: hashedPassword,
        gender,
      });
      const newOTP = parseInt(
        `${Math.floor(Math.random() * 10)}${Math.floor(
          Math.random() * 10,
        )}${Math.floor(Math.random() * 10)}${Math.floor(
          Math.random() * 10,
        )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        10,
      );
      await OTP.create({ code: newOTP, user: newUser.id });
      const htmlMessage = `<h1>OTP</h1><p>Your OTP for IChat application is <strong>${newOTP}</strong></p>`;
      transporter.sendMail(
        {
          subject: "OTP",
          sender: "IChat Application",
          to: newUser.email,
          html: htmlMessage,
        },
        (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              error: "Error Occurred on Server Side",
              message: err.message,
            });
          }
          res.status(200).json({
            success: true,
            message:
              "For your verification OTP is sent successfully, check your mailbox",
          });
        },
      );
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: "Error Occurred on Server Side",
        message: error.message,
      });
    }
  },
);

router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password")
      .isStrongPassword({
        minLength: 8,
        minLowercase: 3,
        minNumbers: 2,
        minSymbols: 1,
        minUppercase: 2,
      })
      .isLength({ min: 8, max: 15 }),
    body("rememberMe").isBoolean(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(404).json({
          success: false,
          error: "Wrong Credentials",
          message: result.errors,
        });
      }
      const userFound = await User.findOne({ email: req.body.email });
      if (!userFound) {
        return res.status(404).json({
          success: false,
          error: "Wrong Credentials",
          message: "No user found",
        });
      }
      const passwordCorrect = await bcrypt.compare(
        req.body.password,
        userFound.password,
      );
      if (!passwordCorrect) {
        return res.status(404).json({
          success: false,
          error: "Wrong Credentials",
          message: "Please provide correct credentials to login",
        });
      }
      if (!userFound.verified) {
        let otp = await OTP.findOne({
          user: userFound.id,
          status: "notVerified",
        });
        if (!otp) {
          const newOTP = parseInt(
            `${Math.floor(Math.random() * 10)}${Math.floor(
              Math.random() * 10,
            )}${Math.floor(Math.random() * 10)}${Math.floor(
              Math.random() * 10,
            )}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
            10,
          );
          otp = await OTP.create({ code: newOTP, user: userFound.id });
        }
        const htmlMessage = `<h1>OTP</h1><p>Your OTP for IChat application is <strong>${otp.code}</strong></p>`;
        transporter.sendMail(
          {
            subject: "OTP",
            sender: "IChat Application",
            to: userFound.email,
            html: htmlMessage,
          },
          (err) => {
            if (err) {
              return res.status(500).json({
                success: false,
                error: "Error Occurred on Server Side",
                message: err.message,
              });
            }
            return res.status(200).json({
              success: true,
              message:
                "For your verification OTP is sent successfully, check your mailbox",
            });
          },
        );
      } else {
        const authToken = jwt.sign(
          { userId: userFound.id.toString() },
          jwtSecret,
        );
        if (req.body.rememberMe) {
          res.cookie("ichat_auth_token", authToken, {
            maxAge: 2592000000,
            httpOnly: true,
          });
        } else {
          res.cookie("ichat_auth_token", authToken);
        }
        res.status(200).json({
          success: true,
          message: "Welcome Back! you logged in successfully",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error Occurred on Server Side",
        message: error.message,
      });
    }
  },
);

router.get(
  "/verify/:otp",
  [param("otp").isNumeric({}).isLength({ max: 6, min: 6 })],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json({
          success: false,
          error: "Validation Error",
          message: result.errors,
        });
      }
      const { otp } = req.params;
      const otpExist = await OTP.findOne({ code: otp, status: "notVerified" });
      if (!otpExist) {
        return res
          .status(400)
          .json({ success: false, error: "Invalid validation OTP" });
      }
      otpExist.status = "verified";
      await User.findByIdAndUpdate(otpExist.user, { verified: true });
      await otpExist.save();
      return res.status(200).json({
        success: true,
        message: "Your account verified successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error Occurred on Server Side",
        message: error.message,
      });
    }
  },
);
export default router;
