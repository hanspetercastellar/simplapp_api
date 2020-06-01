/**
 *  @version 1.0.0
 *  @author Simplapp - Hans Castellar
 *  @description Archivo con la configuracion de coneccion de conexion a MongoDB
 */

const mongose = require('mongoose');

const { APP_HOST, APP_DATABASE } = process.env;
const MONGODB_URI = 'mongodb://' + APP_HOST + '/' + APP_DATABASE;

mongose
	.connect(MONGODB_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(db => console.log('Base de datos Conectada con exito'))
	.catch(err => console.log(err));
