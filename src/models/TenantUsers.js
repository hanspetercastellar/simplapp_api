const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const Tenant =  require('../models/Tenants');

const UserSchema = new Schema({
    documentType: {type: String, required:false},
    documentNumber: {type:Number },
    name: {type: String, required:true},
    firstName: {type: String, required:false},
    lastName: {type: String, required:false},
    email: { type: String, required: true},
    password: { type: String, required: true},
    tenantId:[{
        type: Schema.Types.ObjectId,
        ref: Tenant
    }]
});

UserSchema.methods.encryPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


UserSchema.methods.store = async function (){

};

module.exports = model('TenantUsers',UserSchema);