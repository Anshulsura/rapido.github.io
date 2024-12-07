import captainModel from "../model/captain.model.js";

const createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  vehicletype,
  capacity,
  plate,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !vehicletype ||
    !capacity ||
    !plate
  ) {
    throw new Error("All Filelds Are Required");
  }

  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      vehicletype,
      capacity,
      plate,
    },
  });

  return captain;
};

export default createCaptain;
