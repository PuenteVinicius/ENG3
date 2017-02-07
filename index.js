import express from "express";
import consign from "consign";
const app = express();

consign()
  .include('libs/middlewares.js')
  .then('models')
  .then('controllers/contato.js')
  .then('routes/contato.js')
  .then('libs/boot.js')
  .into(app);

module.exports = app;
