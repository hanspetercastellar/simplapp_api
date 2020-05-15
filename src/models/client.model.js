const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
    tipo:{type:Array, require:true},
    tipoPersona:{type:Number, require: true},
    nombre:{type:String, require: true},
    tipoDoc:{type:String, require: true},
    numeroDoc:{type:String, require: true, maxlength:20},
    nombreComercial: {type: String},
    ubicacion: { type: Map, of: String},
    tenantId:{type:String, require: true}
})

module.exports = model('clients',ClientSchema) 