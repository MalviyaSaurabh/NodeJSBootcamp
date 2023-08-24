const log4js = require('log4js');
const fs = require('fs-extra');
let logger = null;
//
const getLogger = function () {
  try{
    logger = log4js.getLogger();
    const appLog = './applogs/app.log';
    fs.ensureFileSync(appLog);

    log4js.configure({
      appenders: {
        filelog: { type: 'file', filename: appLog,  pattern: '-yyyy-MM-dd' }
      },
      categories: {
        default: {appenders: ['filelog'],level: 'trace'}
      }
   });

 }catch(err){
   console.log(err);
 }
 return logger;
};
//
exports.getLogger = getLogger;