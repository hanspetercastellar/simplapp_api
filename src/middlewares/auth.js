/*const userModel = require("../models/TenantUsers");*/
const jwt = require("jsonwebtoken");
const { APP_KEY } = process.env;

const auth = {
    //Comprueba que el token suministrado sea valido
    ensureToken(req, res, next){
        const  { x_access_token } = req.headers;
      
        if(typeof x_access_token !== 'undefined') {
            const bearer = x_access_token.split(" ");
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next()
        }else{
            res.status(403).json({token:false,message:"Forbidden, No existe un token"})
        }
    },
    verifyToken(req, res, next){
         jwt.verify(req.token,APP_KEY,(error, data)=> {
            console.log(req.token)
             if(error){
                res.status(403).json({
                    error,status:403,
                    message:error.message
                })
             } else {
                 next()
               // res.json({
                 //   text: 'protected',
                   // data
                 //})
             }
            
         })
    }

};

module.exports = auth;