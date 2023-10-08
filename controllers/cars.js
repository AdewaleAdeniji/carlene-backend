const {
  WrapHandler,
  validateRequest,
  generateID,
} = require("../helpers/utils");
const CarModel = require("../models/Cars");

exports.AddCarToUser = WrapHandler(async (req, res) => {
  const body = req?.body;
  const val = validateRequest(body, [
    "carMake",
    "carYear",
    "carModel",
    "tyreCount",
  ]);
  if (val) return res.status(400).send(val);
  // create the car and assign it to the user
  body.carOwnerID = req.userID;
  body.carID = generateID();
  const create = await CarModel.create(body);
  if (!create) return res.status(400).send({ message: "Failed to add car" });
  return res.send({ status: true, carID: body.carID });
});
exports.GetCar = WrapHandler(async (req, res) => {
  const userID = req.userID;
  const carID = req.params.carID;

  const car = await CarModel.findOne({
    carID,
    carOwnerID: userID,
  });
  if (!car) return res.status(400).send({ message: "Car not found" });

  return res.send({ data: car });
});
exports.UpdateCar = WrapHandler(async (req, res) => {
  const userID = req.userID;
  const carID = req.params.carID;

  const car = await CarModel.findOne({
    carID,
    carOwnerID: userID,
  });
  if (!car) return res.status(400).send({ message: "Car not found" });
  const update = await CarModel.findByIdAndUpdate(car._id, req.body);
  return res
    .status(update ? 200 : 400)
    .send({ message: update ? "Update Successful" : "Failed to update" });
});
exports.GetUserCars = WrapHandler(async (req, res) => {
  const userID = req.userID;
  const cars = await CarModel.find({ carOwnerID: userID });
  return res.send({ data: cars });
});
exports.TemplatedController = WrapHandler(async (req, res) => {});
