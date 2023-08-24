const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Employees');
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  created: {type: Date, default: Date.now }
},{
	collection:'FTEmployees'
});
//
module.exports = mongoose.model('Employees', empSchema);	
