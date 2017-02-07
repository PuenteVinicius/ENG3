import express from "express";
import bodyParser from "body-parser";
module.exports = app => {

  app.set('port', 3000);
  app.use(express.static('./app/public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  app.user(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
};
