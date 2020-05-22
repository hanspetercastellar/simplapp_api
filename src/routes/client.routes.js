const express = require('express');
const router = express.Router();
const passport = require("../config/passport")


//middelwares 
const { ensureToken,verifyToken } = require("../middlewares/auth")

//controllers
const { save } = require("../controllers/client.controller");


//Routes lists

router.post("/",ensureToken, verifyToken, save);


module.exports = router;