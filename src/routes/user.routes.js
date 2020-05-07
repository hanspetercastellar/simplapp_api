const express = require("express");
const routes = express.Router();
const TenantUsers = require("../models/TenantUsers");

//controlles
const { store } = require("../controllers/user.controller");

//middlewares
const { exists } = require("../middlewares/user.middleware");
const { verifyToken } = require("../middlewares/middlewares");

var statusR = {
    status:'',
    message:"",
};

routes.post("/store",verifyToken,(req, res, next) => {
    const { documentType,
        documentNumber,
        name,
        firstName,
        lastName,
        email,
        password,
        tenantId } = req.body;
     if (documentType =="" || typeof documentType !== "string" ) {
         statusR.status = "warning";
         statusR.message = "tipo de dato invalido";
         statusR.ref = documentType;
         res.json(statusR)
     }
     next()
},exists);

routes.post("/store",store);

module.exports = routes;