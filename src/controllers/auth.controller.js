
const jwt = require("jsonwebtoken");
const { APP_KEY } = process.env;
const passport = require('../config/passport');

//models 
const TenantUsers = require ("../models/TenantUsers");
const Tenant = require("../models/Tenants");


module.exports = {

    async login(req, res){
        const user = await TenantUsers.findOne({
            email:req.body.email
        });
       
        if(user){
            let tenants =  await Tenant.findById(
                user.tenantId
            )
            console.log(tenants)
            let isMatch = await user.matchPassword(req.body.password);
            const token = jwt.sign({id:user._id},APP_KEY,{
                expiresIn: 60 * 60 *24
            });
            if (isMatch){
                res.json({"auth":true,tenants,user,token});
            }
            res.json({"auth":true,user,tenants,token});
        }else{
            res.json({"status":"404","message":"El usuario no existe"})
        }
    },
    passporLogin(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.json({auth:false,user,info}); }
            req.logIn(user, function(err) {
              if (err) { return next(err); }
              next()
            });
          })(req, res, next);
    },
    
    logout(req, res){
        req.logout();
        res.send('Bye')
    }
  
};