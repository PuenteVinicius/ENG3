var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
const consign =require('consign');

module.exports = function() {
  var app = express();

  app.set('port', (process.env.PORT || 3000));

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

    consign()
        .include('app/models')
        .then('app/controllers')
        .then('app/routes')
        .into(app);

  return app;
};
