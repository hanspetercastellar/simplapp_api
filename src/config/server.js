const express = require('express');
const morgan = require('morgan');
const path = require('path')

// Initializations
const app = express();

//Settings 
app.set('port', process.env.PORT  || 5000)
app.set('views', path.join(__dirname,'views'))

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(express.json());


//Global variables

//Routes
app.use('/api/products/', require('../routes/main.routes'))

//Static Files
app.use(express.static(path.join(__dirname,'../public')));


module.exports = app;

