import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  try {
    // Get token from cookies or Authorization header
    const token =
      req.cookies?.token || // Corrected to `req.cookies`
      (req.headers.authorization &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID from the token payload
    const user = await userModel.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user information to request object
    req.user = user;

    // Continue to the next middleware
    next();
  } catch (error) {
    console.error("Authentication Error:", error.message);
    return res.status(401).json({ error: "Unauthorized user" });
  }
};

export default userAuth;
