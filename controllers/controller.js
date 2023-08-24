const Employee = require('../models/employee');
exports.getdefault = function(req, res){
    res.send('You are on the root route.');
  };
  //
  exports.aboutus=function(req, res){
    res.send('You are on the about us route.');
  };
  //
  exports.addemployee=function(req, res){
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    const Emp = new Employee();
    Emp.empName = empName;
    Emp.empPass = empPass;
    Emp.save()
    .then(msg => {
        res.send({"message":"Created " + Emp.empName});
    })
    .catch(
        err => res.send({"message":err.message})
    );
  };
  //
  exports.getemployees=function(req, res){
    Employee.find({})
    .then(
        employeeData => res.send(employeeData)
    )
    .catch((err)=>{
        res.send(err);
    })
  };