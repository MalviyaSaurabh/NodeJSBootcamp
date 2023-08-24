const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');
const logger = require('./log4js.js').getLogger();
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
  //res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
  const Emp = new Employee();
  Emp.empName = empName;
  Emp.empPass = empPass;
  Emp.save()
  .then(msg => {
    logger.debug(`Created ${Emp.empName}. Message:${msg._id}`);
    res.send({"message":"Created " + Emp.empName, "ID":msg._id});
  })
  .catch(
    err => res.send({"message":err.message})
  );
};
//
exports.getemployees=function(req, res){
  //res.send('You are on the getdocs route.');
  Employee.find({})
    .then(employeeData => {
      if(employeeData.length === 0)
        res.send({"message":"No Data!"});
      else
        res.send(employeeData);
      }
    )
    .catch(
      err => res.send(err)
    )
};
//
exports.updateemployee= function(req,res){
  let empName = req.body.empName;
  let newPass = req.body.newPass;
  let empToFind = empName;
  Employee.findOneAndUpdate(
    {empName:empToFind},
    {$set : { empPass : newPass}},
    {new : true}
  )
  .then(
    result => {
      if(!result)
        res.send({message : empName + " was NOT updated!"});
      else
        res.send({message : "Updated " + empName})
    }
  ).catch(err => {
    res.send({message : "Update Failed " + err.message})
  })

};
//
//
exports.loginuser=function(req, res){
  let empName = req.body.empName;
  let empPass = req.body.empPass;
  Employee.find({ empName: empName })
    .then(
      employeeData => {
        //check that we have something, if not, send error message
        if (employeeData.length === 0)
          res.send({ "message": empName + " not found!" });
        else {
          //we have an object, so test the password
          if (employeeData[0].empPass == empPass) {
            //see if both passwords match
            var token = jwt.sign(
              {
                empName: employeeData[0].empname,
                userID: employeeData[0]._id
              },
              "shhhh",
              { expiresIn: "1h" },
              (err, token) => {
                if (err) res.send(err);
                res.send(token);
              }
            );
          } else {
            res.end("Login Failed")
          }
        }
      }
    )
    .catch((err) => {
      //error in waiting for employeeData
      res.send(err);
    })
};
//
exports.pughome=function(req, res){
  //res.send('You are on the pug home route.');
  res.render(
    'pughome'
  )
};
