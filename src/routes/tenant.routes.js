/* =======================Descripcion ============================
 * *********************** mayo 16, 2020**************************
 * @ensureToken ? Certidfica que exista un token en la peticion : json { token:false, message:error }
 * @verifyToken ? comprueba que el token sea el mismo del servidor
 *
 * ================================================================================
 */

const express = require('express');
const router = express.Router();

//middlewares
const { ensureToken, verifyToken } = require('../middlewares/auth');

//controllers
const { create } = require('../controllers/tenant.controller');

/**=====Router Lists========== */

//Registra un nuevo tenant
router.post('/', ensureToken, verifyToken, create);

module.exports = router;
