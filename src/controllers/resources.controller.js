'use strict';

//Used models
const {
	CiudadModel,
	PucModel,
	ResTribuModel,
} = require('../models/utilities.model');

const pais = {
	get: {
		departamentos: async (req, res) => {
			console.log(CiudadModel);
			try {
				let departamentos = await CiudadModel.find(
					{},
					{ departamento: 1, id: 1 }
				);
				res.status(201).json({ departamentos, status: 'done' });
			} catch (error) {
				res.status(500).json({
					error,
					message: 'Error con La base de datos',
					status: 'fail',
				});
			}
		},
		ciudades: async (req, res) => {
			try {
				const { id } = req.query;

				let data = await CiudadModel.find({ id }, { ciudades: 1 });
				res.status(201).json({ data: data[0].ciudades, status: 'done' });
			} catch (error) {
				res.status(500).json({
					error,
					message: 'Error con La base de datos',
					status: 'fail',
				});
			}
		},
	},
};

const contaUtilieties = {
	puc: {
		get: async (req, res) => {
			const { id } = req.query.id !== undefined ? req.query : false;

			try {
				var resp = await PucModel.find({
					$or: [{ cuenta: { $regex: id } }, { codigo: { $regex: id } }],
				}).limit(20);
				console.log(resp);
				res.status(201).json({ data: resp, status: 'done' });
			} catch (error) {
				res.status(500).json({
					error,
					message: 'Error con La base de datos',
					status: 'fail',
				});
			}
		},
	},

	rTributa: {
		get: async (req, res) => {
			try {
				var resp = await ResTribuModel.find({});
				res.status(201).json({ data: resp, status: 'done' });
			} catch (error) {
				res.status(500).json({
					error,
					message: 'Error con La base de datos',
					status: 'fail',
				});
			}
		},
	},
};

module.exports = {
	pais,
	contaUtilieties,
};
