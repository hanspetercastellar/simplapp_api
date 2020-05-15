const {Schema, model} = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose")
const bcrypt = require('bcryptjs');
const Tenant =  require('../models/Tenants');

const UserSchema = new Schema({
    documentType: {type: String, required:false},
    documentNumber: {type:Number, unique: true},
    name: {type: String, required:true},
    firstName: {type: String, required:false},
    lastName: {type: String, required:false},
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true},
    tenantId:[{
        type: Schema.Types.ObjectId,
        ref: Tenant
    }]
},{
    timestamp:true
});

UserSchema.methods.encryPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};


UserSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};


UserSchema.plugin(passportLocalMongoose)

/*
UserSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }

})
*/


/*
UserSchema.methods.store = async function (){

};*/

module.exports = model('tenantusers',UserSchema, 'tenantusers');