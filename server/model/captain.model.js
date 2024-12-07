import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "first name must be at least 3 charactars long"],
    },
    lastname: {
      type: String,
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email must be at least 5 charactars long"],
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],
  },

  vehicle: {
    color: {
      type: String,
      minlength: [3, "at least must be 3"],
      required: true,
    },
    plate: {
      type: String,
      unique: true,
      required: true,
    },
    vehicletype: {
      type: String,
      enum: ["car", "auto", "bike"],
      required: true,
    },
    capacity: {
      type: Number,
      default: 1,
      minlength: [1, "At Least two more"],
    },
  },

  location: {
    latitute: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
});

captainSchema.methods.genAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SCECRET);
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);
export default captainModel;
