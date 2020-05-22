const express = require("express");
const routes = express.Router();
const TenantUsers = require("../models/TenantUsers");

//controlles
const { store, getUser } = require("../controllers/user.controller");

//middlewares
const { exists } = require("../middlewares/user.middleware");
const { ensureToken , verifyToken  } = require("../middlewares/auth")

var statusR = {
    status:'',
    message:"",
};

routes.post("/store",(req, res, next) => {
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

routes.get("/",ensureToken,verifyToken,getUser)

routes.post("/",store);

module.exports = routes;