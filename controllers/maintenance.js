const {
  WrapHandler,
  validateRequest,
  generateID,
} = require("../helpers/utils");
const CarModel = require("../models/Cars");
const MaintenanceModel = require("../models/Maintenance");

exports.MaintenanceTypes = {
  100: "TYRE_CHANGE",
  200: "ENGINE_OIL_CHANGE",
  300: "COOLANT_CHANGE",
  400: "BRAKE_FLUID_CHANGE",
  500: "STEERING_OIL_CHANGE",
  600: "GEAR_OIL_CHANGE",
  700: "TYRE_INFLATION",
  800: "FUEL"
};
exports.MaintenanceController = WrapHandler((req, res) => {});
exports.CreateMaintenanceController = WrapHandler(async (req, res) => {
  //maintenance id, date, carID
  const { maintenanceId, carId } = req.params;
  const body = req?.body;

  const val = validateRequest(body, ["dateDone", "dateDue"]);
  if (val) return res.status(400).send(val);
  // check car model if car with carID exists
  const car = await CarModel.findOne({ carID: carId, carOwnerID: req.userID });
  if (!car) return res.status(400).send({ message: "Car not found" });
  body.carID = carId;
  body.maintenanceId = maintenanceId;
  body.id = generateID();
  const create = await MaintenanceModel.create(body);
  if (!create)
    return res.status(400).send({ message: "Failed to create maintenance" });
  return res.send({ status: true, id: body.id });
});
exports.DeleteMaintenanceController = WrapHandler(async (req, res) => {
  const { maintenanceId, carId } = req.params;
  const car = await CarModel.findOne({ carID: carId, carOwnerID: req.userID });
  if (!car) return res.status(400).send({ message: "Car not found" });
  // delete maintenance with id
  const del = await MaintenanceModel.findOneAndDelete({
    id: maintenanceId,
    carID: carId,
  });
  if (!del) return res.status(400).send({ message: "Failed to delete" });
  return res.send({ status: true });
});
exports.GetCarMaintenanceController = WrapHandler(async (req, res) => {
  const { carId } = req.params;
  const car = await CarModel.findOne({ carID: carId, carOwnerID: req.userID });
  if (!car) return res.status(400).send({ message: "Car not found" });
  // get all maintenance with carID
  const maintenances = await MaintenanceModel.find({ carID: carId });
  return res.send({ data: maintenances });
});
exports.GetCarMaintenanceByMaintenanceIdController = WrapHandler(async (req, res) => {
  const { carId, maintenanceId } = req.params;
  const car = await CarModel.findOne({ carID: carId, carOwnerID: req.userID });
  if (!car) return res.status(400).send({ message: "Car not found" });
  // get all maintenance with carID
  const maintenances = await MaintenanceModel.find({ carID: carId, maintenanceId });
  return res.send({ data: {car , maintenances, types: this.MaintenanceTypes } });
});
exports.MaintenanceTypesController = (req, res) => {
  return res.send({ data: this.MaintenanceTypes });
};
