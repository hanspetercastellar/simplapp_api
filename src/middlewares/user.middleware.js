const tenantUser = require("../models/TenantUsers");

module.exports = {
         async exists (req, res, next) {
            var { email, documentNumber } = req.body;
            var result = await tenantUser.findOne({email: email})
            if(result){
                res.json({"status":"error","message":"el usuario ya existe"})
            }
            next()
        }
}

