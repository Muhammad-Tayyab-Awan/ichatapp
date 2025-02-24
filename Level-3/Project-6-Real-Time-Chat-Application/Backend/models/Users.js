import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    status: {
      type: String,
      enum: ["blocked", "simple"],
      default: "simple"
    },
    ipAddress: {
      type: String,
      unique: true,
      required: true
    }
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
export default User;
