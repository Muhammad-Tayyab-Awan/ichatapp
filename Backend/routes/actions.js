import express from "express";
import verifyLogin from "../middleware/verifyLogin.js";
import { body, query, validationResult } from "express-validator";
import User from "../models/Users.js";
import Report from "../models/Reports.js";
const router = express.Router();

router.get(
  "/block",
  verifyLogin,
  query("blockUserId").isMongoId(),
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(404).json({
          success: false,
          error: "Validation error",
          message: result.errors,
        });
      }
      const { blockUserId } = req.query;
      const userExist = await User.findById(blockUserId);
      if (!userExist) {
        return res.status(404).json({
          success: false,
          error: "Invalid request",
          message: "No user with that id exist",
        });
      }
      const { userId } = req;
      const user = await User.findById(userId);
      for (const element of user.blocked) {
        if (element.userId.toString() === blockUserId) {
          return res.status(404).json({
            success: false,
            error: "Invalid request",
            message: "User already blocked",
          });
        }
      }
      user.blocked.push({ userId: blockUserId });
      await user.save();
      res
        .status(200)
        .json({ success: true, message: "User blocked successfully" });
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
  "/report",
  verifyLogin,
  [
    body("message").isString().isLength({ min: 50, max: 200 }),
    body("againstUserId").isMongoId(),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(404).json({
          success: false,
          error: "Validation error",
          message: result.errors,
        });
      }
      const { userId } = req;
      await Report.create({ ...req.body, userId });
      res.status(200).json({
        success: true,
        message: "Your report against this user submitted successfully",
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
