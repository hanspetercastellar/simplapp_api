const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

//models
const Tenant = require('../models/Tenants');

const schema = buildSchema(`
    type Tenant {
        id: String
        nombre: String
    }
    type Query {
        tenant: [Tenant]
        tenant(id: String): Tenant
    }

    type Mutation {
        addTenant(
            nombre: String,
            direccion: String,
            correo: String,
            activo: Number
        )
    }
`);

var root = {
	addTenant: () => {
		return 'HAns';
	},
};

const d = graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
module.exports = d;
