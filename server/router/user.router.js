import { Router } from "express";
const router = Router();
import { body } from "express-validator";
import {userRegister, userLogin, userProfile, userLogout} from '../controllers/user.controllers.js'
import userAuth from "../middleware/user.userAuth.js";
router.post("/register",
  [
  body("email").isEmail().withMessage("invalid email"),
  body('fullname.firstname').isLength({min : 3}).withMessage('name to be short'),
  body('fullname.lastname').optional(),
  body('password').isLength({min : 6}).withMessage('password to be short')
], 
userRegister);


router.post('/login', [
  body('email').isEmail().withMessage('invalid email'),
  body('password').isLength({min : 6}).withMessage("Invalid Password")
], userLogin);


router.get('/profile', userAuth ,userProfile)

router.get('/logout', userAuth, userLogout)

export default router;



