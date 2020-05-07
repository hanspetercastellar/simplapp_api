/*const userModel = require("../models/TenantUsers");*/

const auth = {
    acountValidate: function() {
        return (req, res, next) => {
            console.log("Estoy aqui");
            //res.json({"status":"aqui"});
            next()
        }
    }

};

module.exports = auth;