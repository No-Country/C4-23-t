import mongoose from "mongoose";

const walletSchema = mongoose.Schema({
  directionName: {
    type: String,
    required: true,
    trim: true,
  },
  lastMovement: {
    type: Number,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  money: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Money",
  },
});

const Wallet = mongoose.model("Wallet", walletSchema);
export default Wallet;
