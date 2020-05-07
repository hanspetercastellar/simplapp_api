const jwt = require("jsonwebtoken");
const { KEY } = process.env


module.exports = {

    verifyToken(req, res, next){
        const token= req.headers["x-access-token"];
       if(!token) {
           return res.status(401).json({
               auth: false,
               message: "No token provider"
           })
       }
       const decoded = jwt.verify(token, KEY);
       req.userId = decoded.id;
       next()
    }
};