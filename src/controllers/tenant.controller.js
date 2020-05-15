//Este controlador manjea todas las rutas para el endPoint /tenant

//models
const Tenant = require("../models/Tenants")

module.exports = {
    async create(req, res){
        const {
            name,
            address,
            email,
            active } = req.body;
            var newTetant = new Tenant({
                                    name,
                                    address,
                                    email,
                                    active 
                                })
            let saved = await newTetant.save()                    
            if (saved){
                res.status(200).json({
                    status:"saved",
                    message:"El inquilino fue creado satisfactoriamente"
                })
            }    
    }
}