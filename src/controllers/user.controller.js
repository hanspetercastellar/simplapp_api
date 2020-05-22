const TenantUsers = require ("../models/TenantUsers");
const Users = new TenantUsers;


module.exports = {
    async store(req, res){
      
        let exists = await  TenantUsers.findOne({email:req.email})
        
        if(exists){
            return res.json(
                { status:true, messaje:"El Usuario Ya existe en la base de datos"}
            )
        }
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
        try {
           await user.save();
        } catch (e){
            res.json(e)
        }
        
        res.json(user)
    },
    async getUser(req, res){
        const { id } = req.body;
    
        let user = await TenantUsers.find({

        })
        res.status(200).send(user);
    }

};