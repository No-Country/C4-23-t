// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDb from "./config/db.js";

// Creating express app
const app = express();
app.use(cors());

// connect to the Db
connectDb();

const port = 4000;
app.get("/", (req, res) => {
  res.send(`Server running on port ${port}`);
});

// Error handlers
app.use(function fourOhFourHandler(req, res) {
  res.status(404).send();
});

app.use(function fiveHundredHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send();
});

// Starting server
app.listen(port, () => console.log(`Server Running on port ${4000}`));
