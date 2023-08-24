const express = require('express');
const routes = require('./routes/routes');
const port = 8000;
const app = express();
app.use(express.static('HTML'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'pug');
const router = express.Router();
routes(router);
//
app.use(router);
app.listen(port, () => {
	console.log("Listening " + port);
});
