import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    againstUserId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    message: {
      type: String,
      required: true,
    },
    reviewed: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "rejected", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true },
);

const Report = mongoose.model("report", reportSchema);

export default Report;
