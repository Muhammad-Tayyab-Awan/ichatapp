import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import authRoute from "./routes/auth.js";
import actionsRoute from "./routes/actions.js";
import dbConnect from "./utils/dbConnect.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json("Welcome to IChat Web Application");
});
app.use("/api/auth", authRoute);
app.use("/api/actions", actionsRoute);
app.all("*", (req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

httpServer.listen(3000, () => {
  console.clear();
  dbConnect();
  console.log("Server is running on port http://localhost:3000");
});
