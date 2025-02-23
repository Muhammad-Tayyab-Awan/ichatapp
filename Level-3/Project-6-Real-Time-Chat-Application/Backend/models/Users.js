import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
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
