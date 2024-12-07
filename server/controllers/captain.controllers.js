import captainModel from "../model/captain.model.js";
import { validationResult } from "express-validator";
import captainService from "../services/captain.service.js";
export const captainRegister = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(401).json({ error: error.array() });
  }

  const { fullname, email, password, vehicle } = req.body;

  const alreadyCaptainExits = await captainModel.findOne({ email });
  if (alreadyCaptainExits) {
    return res.status(401).json({ message: "Captain Already Exists" });
  };

//hast the captain password
const hashPassword = await captainModel.hashPassword(password);

const captain = await captainService({
    firstname : fullname.firstname,
    lastname : fullname.lastname,
    email,
    password : hashPassword,
    color : vehicle.color,
    vehicletype : vehicle.vehicletype,
    capacity : vehicle.capacity,
    plate : vehicle.plate
});

// const token = captain.genAuthToken();

res.status(200).json({ captain})

};
