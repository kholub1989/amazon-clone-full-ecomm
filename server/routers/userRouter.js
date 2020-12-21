import express from "express";
import data from "../data";
import User from "../models/userModel";

const userRouter = express.Router();

userRouter.get("/seed", async (req, res) => {
  const createUsers = await User.insertMany(data.users);
  res.send({ createUsers });
});
