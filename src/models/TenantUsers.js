const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs') 

const UserSchema = new Schema({
    documentType: {type: BigInt, required:false},
    
    name: {type: String, required:true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    tenants:[]
})

UserSchema.methods.encryPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

}

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = model('TenantUsers',UserSchema);