import mongoose, { Schema } from "mongoose";
const otpSchema = new Schema(
  {
    code: { type: Number, required: true, unique: true },
    user: { type: Schema.Types.ObjectId, ref: "user", required: true },
    status: {
      type: String,
      enum: ["verified", "notVerified"],
      default: "verified"
    }
  },
  { timestamps: true }
);
const OTP = mongoose.model("otp", otpSchema);
export default OTP;
