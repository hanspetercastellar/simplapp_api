const Tenant = require('../models/Tenants');

const mainController = {

    async renderMain(req, res) {
        const { name,address,email,active} = req.body;
        const tenant = new Tenant({ name,address,email,active});
        await tenant.save();
        console.log(tenant);
        res.json({"status":"success"});
    },

    async getProducts(req, res) {
        const users = await Tenant.find();
        console.log(users);
        res.json(users);
    }

}

module.exports = mainController