const TenantUsers = require ("../models/TenantUsers");
const Users = new TenantUsers;

module.exports = {
    async store(req, res){
        var { documentType,
            documentNumber,
            name,
            firstName,
            lastName,
            email,
            password,
            tenantId } = req.body;
        //res.json({"algo":name})
        password = await Users.encryPassword(password);
        const user = new TenantUsers({documentType,
            documentNumber,
            name,
            firstName,
            lastName,
            email,
            password,
            tenantId
        });

        await user.save();
        res.json(user)
    }

};