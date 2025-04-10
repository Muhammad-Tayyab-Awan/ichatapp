/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import User from "../models/Users.js";
import jwt from "jsonwebtoken";
const jwtSecret = process.env.JWT_SECRET;

const verifyConnectionLogin = (socket, next) => {
  try {
    const cookies = socket.handshake.headers.cookie;
    if (!cookies) return next(new Error("No cookies found"));
    const token = cookies
      .split(";")
      .find((cookie) => cookie.trim().startsWith("ichat_auth_token="));
    const jwtToken = token.split("=")[1];
    if (!jwtToken) return next(new Error("No token found"));
    jwt.verify(jwtToken, jwtSecret, async (err, decodedToken) => {
      if (err) return next(new Error("Invalid token"));
      const userId = decodedToken.userId;
      const userExist = await User.findById(userId);
      if (!(userExist && userExist.verified))
        return next(new Error("Invalid token"));
      socket.userId = userId;
      next();
    });
  } catch (error) {
    next(new Error("Server side error occurred"));
  }
};

export default verifyConnectionLogin;
