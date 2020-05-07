const tentanUser = require("../models/TenantUsers");
const jwt = require("jsonwebtoken");
const { KEY } = process.env;
module.exports = {

    async login(req, res){
        const user = await tentanUser.findOne({
            email:req.body.email
        });
        if(user){
            let isMatch = await user.matchPassword(req.body.password);
           const token = jwt.sign({id:user._id},KEY,{
                expiresIn: 60 * 60 *24
            });
            if (isMatch){
                res.json({"auth":true,token});
            }
           res.json({"auth":true,token});
        }else{
            res.json({"status":"404","message":"El usuario no existe"})
        }

    }
};