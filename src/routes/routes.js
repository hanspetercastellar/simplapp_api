/*    Hans Peter Castellar
============================================
          | Archivo de Rutas |
             | 25/05/2020 |
============================================
En este documentos se declaran las diferentes rutas
Estas Rutas contienen los End Pint de toda la API

*/

const express = require('express');
const router = express.Router();

//Middelware global para las rutas
const { ensureToken, verifyToken } = require('../middlewares/auth');

router.use('/api/auth/', require('./auth.routes'));
router.use('/api/user/', require('./user.routes'));
router.use('/api/products/', require('./main.routes'));
router.use('/api/tenant/', require('./tenant.routes'));
router.use('/api/client/', require('./client.routes'));

//Optine recursos de formularios y datos como ciudades y municipios
router.use(
	'/api/resources/',
	ensureToken,
	verifyToken,
	require('./resources.routes')
);

module.exports = router;
