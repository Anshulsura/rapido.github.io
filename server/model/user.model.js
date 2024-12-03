import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
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
});

userSchema.methods.genAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SCECRET);
  return token;
  
};

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
export default userModel;
