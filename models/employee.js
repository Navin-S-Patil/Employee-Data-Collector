const mongoose = require("mongoose");

const Emoloyee = new mongoose.Schema(
  {
    employeeID: { type: Number , required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("employee", Emoloyee);
