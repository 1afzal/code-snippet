import express from "express";
const app = express();
import bcrypt from "bcrypt";
import { connectDB } from "./config/connectDB.js";
import { userModel } from "./models/userModel.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config;
const MONGO_URI = process.env.MONGO_URI || "";

connectDB(MONGO_URI); //mongodb database connection.

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({
      error: "Invalid credentials..",
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userModel.create({
    name: name,
    email: email,
    password: hashedPassword,
  });
  return res.status(200).send({
    message: "user created",
    user: user,
  });
});

app.listen(6969, () => {
  console.log("server is live");
});
