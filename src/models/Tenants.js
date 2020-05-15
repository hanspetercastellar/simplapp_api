const {Schema, model} = require('mongoose');

const TenantSchema = new Schema({ 
    name: { type: String, require: true },
    address: { type: String, require:false},
    email:{ type: String, require:false },
    active:{ type:Number, require:true }
    },{
    timestamps: true
});

module.exports  = model('tenant',TenantSchema)