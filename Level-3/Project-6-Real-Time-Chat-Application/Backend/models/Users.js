import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    birthdate: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"]
    },
    password: {
      type: String,
      required: true
    },
    verified: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ["blocked", "simple"],
      default: "simple"
    }
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
