const express = require('express');
const router = express.Router();

//controller
const {
	pais,
	contaUtilieties,
} = require('../controllers/resources.controller');

//initializations
const { get } = pais;

router.get('/departamentos', get.departamentos);

router.get('/ciudades', get.ciudades);

router.get('/puc', contaUtilieties.puc.get);

router.get('/responsabilidadTributaria', contaUtilieties.rTributa.get);
module.exports = router;
