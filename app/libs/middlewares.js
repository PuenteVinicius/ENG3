import express from "express";

module.exports = app => {

  app.set('port', 3000);
  app.use(express.static('./app/public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
};
