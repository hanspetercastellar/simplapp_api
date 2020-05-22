const ClientModel = require("../models/client.model");

module.exports = {

    async save(req, res, next) {
        const {tipo, tipoPersona, nombre, tipoDoc, numeroDoc, nombreComercial, ubicacion, tenantId }  = req.body;
        let exists = await ClientModel.findOne({numeroDoc}) 
        if(exists){
            return res.json({status:"exists",message: "Ya se encuentra registrado"})
        }
        let  client = new ClientModel({ 
                tipo,
                tipoPersona,
                nombre,
                tipoDoc,
                numeroDoc,
                nombreComercial,
                ubicacion,
                tenantId
                });
        if(client) {
            try {
                let saved = await client.save();
                if(saved) {
                    res.status(201).json({
                         status:"saved",
                         message:"Registro Creado Satisfactoriamente" 
                        });
                }
                
            } catch(error){
                res.status(500).json({
                    error,
                    status:false,
                    message:"Ocurrio un error al tratar de insertar los datos"
                }) 
            }
        }
        
    }

}