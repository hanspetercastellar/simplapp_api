const mongose = require('mongoose');

const { APP_HOST, APP_DATABASE }= process.env;
const MONGODB_URI = 'mongodb://'+APP_HOST+'/'+APP_DATABASE;


mongose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser:true,
    useCreateIndex:true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))