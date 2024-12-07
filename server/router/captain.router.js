import { Router } from "express";
const router = Router();
import { body } from "express-validator";
import {captainRegister} from '../controllers/captain.controllers.js'
router.post("/register", [
  body("fullname.firstname")
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 characters long."),
  body("fullname.lastname").optional(),
  body("email").isEmail().withMessage("Please provide a valid email address."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),
  body("vehicle.color")
    .isLength({ min: 3 })
    .withMessage("Vehicle color must be at least 3 characters long."),
  body("vehicle.plate").isLength({min : 3}).withMessage("Number plate is required."),
  body("vehicle.vehicletype")
    .isIn(["car", "bike", "auto"])
    .withMessage(
      "Vehicle type must be one of the following: car, bike, or auto."
    ),
  body("vehicle.capacity")
    .isInt()
    .withMessage("Vehicle capacity must be a valid number."),
],captainRegister );

export default router;
