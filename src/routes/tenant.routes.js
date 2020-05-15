const express = require("express");
const router = express.Router();

//middlewares
const { ensureToken, verifyToken } = require("../middlewares/auth");

//controllers
const { create } = require("../controllers/tenant.controller");

/**=====Router Lists========== */

router.post("/",ensureToken,verifyToken,create);



module.exports = router
