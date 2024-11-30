import { Router } from "express";
const router = Router();
import { body } from "express-validator";
import {userRegister} from '../controllers/user.controllers.js'

router.post("/register",
  
  
  
  [
  body("email").isEmail().withMessage("invalid email"),
  body('fullname.firstname').isLength({min : 3}).withMessage('name to be short'),
  body('fullname.lastname').optional(),
  body('password').isLength({min : 6}).withMessage('password to be short')
], 



userRegister);

export default router;
