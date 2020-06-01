const express = require('express');
const router = express.Router();

//Used models
const colombiaModel = require('../models/ciudades.model');

router.get('/departamentos', async (req, res) => {
	try {
		let departamentos = await colombiaModel.find(
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
});

router.get('/ciudades', async (req, res) => {
	try {
		const { id } = req.query;

		let data = await colombiaModel.find({ id }, { ciudades: 1 });
		res.status(201).json({ data: data[0].ciudades, status: 'done' });
	} catch (error) {
		res.status(500).json({
			error,
			message: 'Error con La base de datos',
			status: 'fail',
		});
	}
});

module.exports = router;
