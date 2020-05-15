const express = require('express');
const router = express.Router();
const { login, passporLogin, logout } = require("../controllers/auth.controller");
const passport = require("../config/passport")
const { ensureToken,verifyToken } = require("../middlewares/auth")

router.post("/login",passporLogin,login);
router.post("/logout",passporLogin,logout)
/*
router.post("/login",(req,res) => {
    res.json({"status":"you are loged"});
});
*/

router.get("/getToken",ensureToken,verifyToken)


module.exports = router;