import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
const userAuth = async (req, res, next) => {
  try {
    const token =
      res.cookies.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);

    const decoded = jwt.verify(token, process.env.JWT_SCECRET);

    const user = await userModel.findOne(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: "Unauthorized user" });
  }
};

export default userAuth;
