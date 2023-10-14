const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { validateUser } = require("./middlewares/auth");
const {
  AddCarToUser,
  GetCar,
  UpdateCar,
  GetUserCars,
  GetCarDetails,
} = require("./controllers/cars");
const {
  MaintenanceTypesController,
  CreateMaintenanceController,
  DeleteMaintenanceController,
  GetCarMaintenanceController,
  GetCarMaintenanceByMaintenanceIdController,
} = require("./controllers/maintenance");
const { loginUser, registerUser, UserProfile } = require("./controllers/auth");
require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// auth service
app.post("/auth/login", loginUser);
app.post("/auth/register", registerUser);
app.get("/user/profile", validateUser, UserProfile);

// car service
app.post("/user/cars/add", validateUser, AddCarToUser);
app.get("/user/car/:carID", validateUser, GetCar);
app.get("/user/car/:carID/details", validateUser, GetCarDetails);
app.get("/user/cars", validateUser, GetUserCars);
app.put("/user/car/:carID", validateUser, UpdateCar);

// maintenance service
app.get("/maintenances", MaintenanceTypesController);
app.post(
  "/maintenances/:carId/:maintenanceId",
  validateUser,
  CreateMaintenanceController
);
app.delete(
  "/maintenances/:carId/:maintenanceId",
  validateUser,
  DeleteMaintenanceController
);
app.get("/maintenances/:carId", validateUser, GetCarMaintenanceController);
app.get(
  "/maintenances/:carId/:maintenanceId",
  validateUser,
  GetCarMaintenanceByMaintenanceIdController
);

app.get("/health", (_, res) => {
  return res.status(200).send("OK");
});
app.get("*", (_, res) => {
  return res.status(404).send("Not found");
});
app.post("*", (_, res) => {
  return res.status(404).send("Not found");
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.APP_DB, // specify the database name here
  })
  .then(() => console.log("connected to mongodb"))
  .catch(() => console.log("error occured connecting to mongodb"));

app.listen(process.env.PORT || 3003, () => {
  console.log("Server is running on port 3001");
});
