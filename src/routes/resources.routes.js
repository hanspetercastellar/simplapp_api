const express = require('express');
const router = express.Router();

//Used models
const {CiudadModel, PucModel} = require('../models/utilities.model');

router.get('/departamentos', async (req, res) => {
	console.log(CiudadModel)
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
});

router.get('/ciudades', async (req, res) => {
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
});

router.get('/puc', async (req, res) => {
	
 const { id } = req.query.id !== undefined ? req.query : false;
	
	 try {
		 var resp = {}
		 if( id !== undefined) {
			
			 	 resp = await PucModel.find({Codigo: id}) 
		 }else {
			  resp = await PucModel.find({}, null, {skip: 10}).limit(50)
		 }
	

		res.status(201).json({ data: resp, status: 'done' });

		}catch(error){
			res.status(500).json({
				error,
				message: 'Error con La base de datos',
				status: 'fail',
			});
			}

});



module.exports = router;
