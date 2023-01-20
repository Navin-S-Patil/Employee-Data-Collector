const router = require("express").Router();
const Employee = require("../models/employee") ;

router.post("/", async (req, res) => {
  const newUser = new Employee({
    employeeID: req.body.employeeID,
    name: req.body.name,
    number : req.body.number,
  });



  try {
    const emp = await Employee.findOne({
      employeeID: req.body.employeeID,
      name: req.body.name,
      number : req.body.number,
    });
    const EmployeeRoll = await Employee.findOne({ employeeID: req.body.employeeID });
    // const EmployeeName = await Employee.findOne({ name: req.body.name });

    
    if (!emp && !EmployeeRoll) {
      //checkIn of new Employee
      const savedUser = await newUser.save();
      console.log("loggedIn");
      res
        .status(200)
        .json({ success: true, data: savedUser, message: "Employee Data Saved" , time: null});
    } 
    //checkout wala code (no use)
    // else if (emp) {
    //  // checkOut of existing Employee
    //   let query = { rollNo: req.body.rollNo };
    //   Employee.deleteOne(query, function (err, obj) {
    //     if (err) throw err;
    //     console.log("document deleted");
    //   });
    //   console.log("loggedOut");
    //   res
    //     .status(200)
    //     .json({ success: true, data: emp, message: "Checked Out" , time: time});
    // } 
    else if (EmployeeRoll) {
      console.log("Employee Id already exists");
      // return next(new ErrorResponse("Roll No. already exists", 200));
      res.status(200).json({
        success: true,
        data: EmployeeRoll,
        message: "Employee Id already exists",
       
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message, time: null });
  }
});

module.exports = router;
