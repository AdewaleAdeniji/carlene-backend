const mongoose = require("mongoose");
const { CarSizeTypes } = require("../constants/cars");
const Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    carModel: {
      type: String,
    },
    carMake: {
      type: String,
      default: "",
    },
    carYear: {
      type: String,
    },
    carOwnerID: {
      type: String,
      default: "",
    },
    carUse: {
      type: String,
      default: "DAILY",
    },
    tyreCount: {
      default: "4",
      type: String,
    },
    carColor: String,
    carType: {
      type: String,
      default: CarSizeTypes[0].name,
    },
    carID: {
      type: String,
      default: "",
      unique: true,
      immutable: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("cars", carsSchema);
