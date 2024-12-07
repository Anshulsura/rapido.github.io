import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
const app = express();
import router from "./router/user.router.js";
import captainRouter from "./router/captain.router.js";
import dbConnect from "./db/connect.js";
import cookieParser from "cookie-parser";
dbConnect();
const port = process.env.PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/users", router);

app.use("/captain", captainRouter);

app.listen(port, () => {
  console.log(`server is the run port at http://localhost:${port}`);
});
