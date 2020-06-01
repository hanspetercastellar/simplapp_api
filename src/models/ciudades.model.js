const { Schema, model } = require('mongoose');

const CiudadesSchema = new Schema({
	id: { unique: true, type: Number },
	departamento: { type: String },
	ciudades: [{ type: String }],
});

module.exports = model('colombia', CiudadesSchema);
