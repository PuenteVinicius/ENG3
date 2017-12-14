var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://admin:admin123@ds127936.mlab.com:27936/eng3_academia')

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' +
              app.get('port'));
});
