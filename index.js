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
const { json } = require("./json");
require("dotenv").config();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let datajson = [
  {
    fingerprint: "i3je3oi4",
    metadata:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
    lastActive: "2024-09-05T06:56:00.000Z",
    activeStatus: true,
  },
  {
    fingerprint: "i3je3444oi4",
    metadata:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome",
    lastActive: "2024-09-02T18:24:00.000Z",
    activeStatus: true,
  },
  {
    fingerprint: "i3je34oi4",
    metadata:
      "Mozilla/5.0 Android 10 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/",
    lastActive: "2024-09-04T09:16:00.000Z",
    activeStatus: false,
  },
  {
    fingerprint: "dd",
    metadata:
      "Mozilla/5.0 Android 10 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/",
    lastActive: "2024-09-02T15:00:00.000Z",
    activeStatus: false,
  },
];
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
app.all("/api/subscription/status", async (req, res) => {
  const body = req.body;
  const appSlug = body?.slug || "michelin";
  const api = await fetch(
    `https://portal-api.martech3d.com/api/platforms/${appSlug}`
  );
  const data = await api.json();
  return res.send({
    subscribed: true,
    allowCaching: true,
    subscriptionExpiryDate: "2024-09-25T23:30:37.405Z",
    subscriptionExpired: false,
    serviceWorkerVersion: "v1.0.0",
    updateVersion: 6.55,
    secondsUntilExpiry: 100000000,
    ...data,
  });
});

app.get("/api/devices", async (req, res) => {
  return res.send({
    data: datajson,
  });
});

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
  console.log(`Server is running on port ${process.env.PORT || 3003}`);
});
