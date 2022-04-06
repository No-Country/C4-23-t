// creacion del modelo money
import mongoose from "mongoose";

const moneySchema = new mongoose.Schema({
  amount: {
    type: mongoose.Schema.Types.Number,
    required: true,
    min: 0,
  },
  divisa: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
  },
});

const Money = mongoose.model("Money", moneySchema);
