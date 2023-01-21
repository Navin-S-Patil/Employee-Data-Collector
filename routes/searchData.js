const router = require("express").Router();
const Employee = require("../models/employee");

router.post("/", async (req, res) => {
  try {
    const emp = await Employee.find({
      _id: req.body.search,
    });
    // console.log(emp);
    if (emp.length == 0) {
      res
        .status(201)
        .json({ success: false, data: emp, message: "Employee not found" });
      return;
    }

    if(emp != null){
      res
      .status(200)
      .json({ success: true, data: emp, message: "Employee found" });
    }

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
