const express = require('express'); 
const router = express.Router();

router.use('/api/auth/', require('./auth.routes'));
router.use('/api/user/', require('./user.routes'));
router.use('/api/products/', require('./main.routes'));
router.use('/api/tenant/', require('./tenant.routes'));
router.use('/api/client/', require('./client.routes'));

module.exports = router;