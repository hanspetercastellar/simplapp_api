/**
 *  @version 1.0.0
 *  @author Simplapp - Hans Castellar
 *  @description White lists, Lista de Clientes admitidos para consumir la api
 */

const config = {
	application: {
		cors: {
			server: [
				{
					origin: 'http://localhost:3000',
					credentials: true,
				},
			],
		},
	},
};

module.exports = config;
