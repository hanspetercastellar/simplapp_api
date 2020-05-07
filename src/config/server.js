const express = require('express');
const path = require('path');

//libraries
var session = require('express-session');
const morgan = require('morgan');

// Initializations
const app = express();

//Settings 
app.set('port', process.env.PORT  || 4000);
app.set('views', path.join(__dirname,'views'));

//Middlewares
/*app.use(session({

}))*/
app.use(express.urlencoded({extended: false}));//Entender datos de formularios
app.use(morgan('dev'));
app.use(express.json());//convertir request json a objets js


//Global variables

//Routes
app.use('/api/auth/', require('../routes/auth.routes'));
app.use('/api/user/', require('../routes/user.routes'));
app.use('/api/products/', require('../routes/main.routes'));

//Static Files
app.use(express.static(path.join(__dirname,'../public')));
module.exports = app;

