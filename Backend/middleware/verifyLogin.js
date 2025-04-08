/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
const jwtSecret = process.env.JWT_SECRET;
const verifyLogin = async (req, res, next) => {
  try {
    const authToken = req.cookies["ichat_auth_token"];
    jwt.verify(authToken, jwtSecret, async (err, decodedToken) => {
      if (err) {
        return res.status(404).json({
          success: false,
          error: "Invalid request",
          message: "Not a valid token",
        });
      }
      const userId = decodedToken.userId;
      const userExist = await User.findById(userId);
      if (!(userExist && userExist.verified)) {
        return res.status(404).json({
          success: false,
          error: "Invalid request",
          message: "Not a valid token",
        });
      }
      req.userId = userId;
      next();
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error Occurred on Server Side",
      message: error.message,
    });
  }
};
export default verifyLogin;
