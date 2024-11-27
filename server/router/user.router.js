import express from "express";
const router = express.Router();
import { body } from "express-validator";
import {  } from "../controllers/user.controllers.js";
router.post("/register", [
  body("email").isEmail().withMessage("Enter Valid Email Address"),
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("Name to be short"),
  body("password").isLength({ min: 6 }).withMessage("password to be short"),
], userRegister);

export default router;
