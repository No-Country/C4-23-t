import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
    maxlength: 100,
  },
  lastname: {
    type: mongoose.Schema.Types.String,
    maxlength: 50,
    required: true,
  },

  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  bithdate: {
    type: mongoose.Schema.Types.Date,
    required: false,
  },

  password: {
    type: mongoose.Schema.Types.String,
    minlength: 8,
    maxlength: 1024,
    required: true,
  },

  dni: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wallet",
  },
});

export const User = mongoose.model("User", userSchema);
