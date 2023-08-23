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
    //res.send('You are on the addemployee route');
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
  };
  //
  exports.getemployees=function(req, res){
    //res.send('You are on the getdocs route.');
    Employee.find({})
    .then(
        employeeData => res.send(employeeData)
    )
  };