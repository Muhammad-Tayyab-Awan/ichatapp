/* eslint-disable no-undef */
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
const jwtSecret = process.env.JWT_SECRET;
const loginStatusCheck = async (req, res, next) => {
  try {
    const authToken = req.cookies["ichat_auth_token"];
    jwt.verify(authToken, jwtSecret, async (err, decodedToken) => {
      if (err) {
        return res.status(400).json({
          loggedIn: false,
        });
      }
      const userId = decodedToken.userId;
      const userExist = await User.findById(userId);
      if (!(userExist && userExist.verified)) {
        return res.status(400).json({
          loggedIn: false,
        });
      }
      req.loginStatus = { userId, loggedIn: true };
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

export default loginStatusCheck;
