import userModel from "../model/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";
import blacklistToken from "../model/blacktoken.model.js";
export const userRegister = async function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  });

  const token = user.genAuthToken();

  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side scripts from accessing the cookie
    maxAge: 24 * 60 * 60*1000, // 24 hours in milliseconds
  });


  res.status(201).json({ token, user });
};

export const userLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ error: errors.array() });
  }

  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({ message: "Invalid Email Or Password" });
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Email Or Password" });
  }

  const token = user.genAuthToken();

  //insert the token in cookies
  res.cookie("token", token);

  res.status(200).json({ token, user });
};

export const userProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

export const userLogout = async (req, res, next) => {
  res.clearCookie('token');

  const token = req.cookies?.token || req.headers.authorization;

  await blacklistToken.create({token});

  res.status(200).json({message : "User Logout"})
};
