const express = require('express');
const router = express.Router();
const { save } = require("../controllers/client.controller");
const passport = require("../config/passport")
const { ensureToken,verifyToken } = require("../middlewares/auth")

router.post("/",ensureToken, verifyToken, save);


module.exports = router;