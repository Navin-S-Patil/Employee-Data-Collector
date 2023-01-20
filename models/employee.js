const mongoose = require("mongoose");

const Student = new mongoose.Schema(
  {
    employeeID: { type: Number , required: true },
    name: { type: String, required: true },
    number: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student", Student);
