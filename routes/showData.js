const router = require("express").Router();
const Employee = require("../models/employee") ;


router.get("/", async (req, res) => {
  try {
    const emp = await Employee.find({});
    res.status(200).json({ success: true, data: emp });
    // console.log(emp);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


module.exports = router;