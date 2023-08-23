const controller = require('../controllers/controller');
module.exports = function(router){
    //
    router.get('/', controller.getdefault);
    //
    router.post('/addemployee', controller.addemployee);
    //
    router.get('/aboutus', controller.aboutus);
    //
    router.get('/getemployees', controller.getemployees);
    //
  };