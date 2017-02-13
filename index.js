var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://admin:admin1234@ds141697.mlab.com:41697/vmbtest')

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
              app.get('port'));
});
