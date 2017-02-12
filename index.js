var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://teste:teste@ds019886.mlab.com:19886/teste')

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
              app.get('port'));
});
