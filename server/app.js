import { configDotenv } from "dotenv";
configDotenv();
import express from "express";
const app = express();
import dbConnect from "./db/connect.js";
dbConnect();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is the run port at http://localhost:${port}`);
});




