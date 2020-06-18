/**
 *  @date 01/06/2020
 *  @author  Simplapp - Hans Peter Castellar
 *  @description  Modelos utilitarios como lista de ciudades, datos aislados a la logica del negocio
 *
 */

const { Schema, model } = require('mongoose');

const CiudadesSchema = new Schema({
	id: { unique: true, type: Number },
	departamento: { type: String },
	ciudades: [{ type: String }],
});

const PucSchema = new Schema({
	Codigo: { unique: true, type: Number },
	departamento: { type: String },
	ciudades: [{ type: String }],
});

const ResTribuSchema = new Schema({
	id: { unique: true, type: String },
	nombre: { type: String },
});

module.exports = {
	CiudadModel: model('colombia', CiudadesSchema),
	PucModel: model('plan_cuentas', PucSchema),
	ResTribuModel: model('r_tribut', ResTribuSchema),
};
