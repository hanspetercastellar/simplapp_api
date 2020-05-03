require('dotenv').config();
const app = require('./config/server');

require('./config/database');

app.listen(app.get('port') , ()=>{
  console.log('server in port '+ app.get('port'))
})




/*const express =require('express');
const app = express();
const morgan = require('morgan');

function logger(req, res, next){
    console.log('peticion recibida'+req.protocol+'://'+req.get('host')+req.originalUrl);
    next()
}

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=>{
  res.json({
      status:'Ok'
  })
});
app.get('/about/:id', (req,res)=>{
  res.send('<h1>About me</h1>')
});

app.listen(4000,()=>{
    console.log('Serve listen in por 8000')
}); */