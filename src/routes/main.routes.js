const express = require('express'); 
const router = express.Router();

const Tenant = require('../models/Tenants')

router.get('/', async (req, res) => {

     const users = await Tenant.find();

     console.log(users)
    res.json(users)
})

router.post('/', async (req, res) => {
    const { name,address,email,active} = req.body
    const tenant = new Tenant({ name,address,email,active})
    await tenant.save();
    console.log(tenant)
    res.json({"status":"success"})
})

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