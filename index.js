const express = require("express");
const routes = require('./routes/routes');
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const router = express.Router();
routes(router);
app.use('/', router);
app.listen(port, function(){
    console.log("App is listening on port : "+port);
});

