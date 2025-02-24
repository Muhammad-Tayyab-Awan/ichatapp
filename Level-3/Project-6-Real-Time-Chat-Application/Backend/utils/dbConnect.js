import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;
const dbConnect = async () => {
  try {
    mongoose.connect(DB_URI).then(() => {
      console.log("Connection to DB established successfully");
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error Occurred on Server Side",
      message: error.message
    });
  }
};

export default dbConnect;
