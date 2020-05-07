const express = require('express'); 
const router = express.Router();
const { acountValidate } = require("../middlewares/auth");


//import Controllers
const { renderMain ,getProducts} = require('../controllers/main.controlle')

router.get('/', acountValidate(), getProducts);

router.post('/', renderMain)

router.put('/:id', async (req, res) => {
    const {name,address,email,active} = req.body;
    const newTenant = {name,address,email,active};
   // Tenant.findbyIdAndUpdate(); 
   console.log(req.params.id)
})

router.delete('/:id', async (req, res) => {
    await Tenant.findByIdAndRemove(req.params.id)
});

module.exports = router;