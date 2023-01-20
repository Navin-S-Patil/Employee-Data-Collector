const router = require("express").Router();
const Employee = require("../models/employee");

router.post("/", async (req, res) => {
  try {
    const emp = await Employee.find({
        _id: req.body.search,
    });
    res.status(200).json({ success: true, data: emp });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
