const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maintainSchema = new Schema(
  {
    type: String,
    dateDone: String,
    metaData: {
      type: Object,
      default: {},
    },
    maintenanceId: String,
    dateDue: String,
    carID: String,
    id: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("maintanance", maintainSchema);
