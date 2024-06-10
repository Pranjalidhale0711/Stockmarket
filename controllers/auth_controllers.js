import express from "express";
import User from "../models/user_model.js";
import { validemail } from "../middleware/validation.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { checkAuthorization } from "../middleware/ValidateUser.js";
import Portfolio from "../models/portfolio_model.js";

export const signUp = async (req, res) => {
  const { userName, email, password, confirmPassword } = req.body;
  const profile = await User.findOne({ userName });
  if (profile) {
    res.status(500).json({ message: "user already exists" });
    return;
  }

  //checking mail already exsists
  const checkForMail = await User.findOne({ email });
  if (checkForMail) {
    res.status(500).json({ message: "mail is already registered" });
    return;
  }
  // console.log("password is", password, "confirm password is", confirmPassword);

  ///validations
  if (!validemail(email)) {
    res.status(500).json({ message: "Invalid email:Please check again" });
    return;
  }
  if (confirmPassword != password) {
    res
      .status(500)
      .json({ message: "Password and confirmPassword must be same" });
    return;
  }
  if (password.length < 6) {
    res
      .status(500)
      .json({ message: "Password should have minimum 6 characters" });
    return;
  }
  //saving in database
  const newPassword = password + process.env.PEPPER;
  const hashedPassword = await bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(newPassword, salt));
  const user = new User({ userName, email, password: hashedPassword });
  const portfolio = new Portfolio({ userId: user._id, balance: 1000, portfolio :[]});
  try {
    await portfolio.save();
    user.portfolio = portfolio._id;

    await user.save();

    res.status(201).json({ message: "user created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req, res) => {
  const { userName, password } = req.body;
  console.log(userName)
  const findUser = await User.findOne({ userName });
  if (!findUser) {
    res.status(500).json({ message: "User does not exist" });
    return;
  }

  const newPassword = password + process.env.PEPPER;
  const validatePassword = await bcrypt.compare(newPassword, findUser.password);
  if (!validatePassword) {
    res.status(401).json({ message: "Inavalid Password, Please try again" });
    return;
  }
  try {
    const id = findUser._id;
    const token = jwt.sign({ id }, process.env.JWTSECRET);
    // ValidateUser();
    // console.log(token);
    res.status(200).send({ message: "User logged in succesfuly", token });
  } catch (e) {
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const fetchUser = (req, res) => {
  console.log(req.decoded_token);
  // res.status(200).json({msg:"Check cnsole"});
  res.status(200).json({ message: req.decoded_token });
};