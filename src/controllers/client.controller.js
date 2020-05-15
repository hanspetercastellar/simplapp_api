const ClientModel = require("../models/client.model");

module.exports = {

    async save(req, res, next) {
        const {  
            tipo,
            tipoPersona,
            nombre,
            tipoDoc,
            numeroDoc,
            nombreComercial,
            ubicacion,
            tenantId
        }  = req.body;
        client = new ClientModel(
            { 
            tipo,
            tipoPersona,
            nombre,
            tipoDoc,
            numeroDoc,
            nombreComercial,
            ubicacion:{...ubicacion},
            tenantId:req.headers["tenant_id"]
             }
        );
        if(client) {
            let saved = await client.save();
            if (saved) {
                res.status(500).json(
                    { status:"saved", message:"Registro Creado Satisfactoriamente" }
                )
            }
        }
        
    }

}