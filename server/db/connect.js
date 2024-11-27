import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
