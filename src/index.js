require('dotenv').config();
const app = require('./config/server');

require('./config/database');

app.listen(app.get('port') , () => {
  console.log('server in port '+ app.get('port'))
});

