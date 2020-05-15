const express = require('express');
const path = require('path');
var cors = require('cors')

//libraries
var session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")

// Initializations
const app = express();
require("../config/passport")
const config = require("../config/config");

//Settings 
app.set('port', process.env.PORT  || 5000);
app.set('views', path.join(__dirname,'views'));

//Middlewares
/*app.use(session({

}))*/
app.use(cors(
  config.application.cors.server
))
app.use(express.urlencoded({extended: true}));//Entender datos de formularios
app.use(morgan('dev'));
app.use(express.json());//convertir request json a objets js
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



//Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success")
    res.locals.error =req.flash("error")
    res.locals.user = req.user || null;
    console.log(req.body)
    next()
})

//Routes
app.use('/api/auth/', require('../routes/auth.routes'));
app.use('/api/user/', require('../routes/user.routes'));
app.use('/api/products/', require('../routes/main.routes'));
app.use('/api/tenant/', require('../routes/tenant.routes'));
app.use('/api/client/', require('../routes/client.routes'));

//Static Files
app.use(express.static(path.join(__dirname,'../public')));
module.exports = app;

