const express = require('express');
const router = express.Router();
const { login } = require("../controllers/auth.controller");

router.post("/login",login);
/*
router.post("/login",(req,res) => {
    res.json({"status":"you are loged"});
});
*/

module.exports = router;