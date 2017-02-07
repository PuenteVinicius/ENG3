import express from "express";
import consign from "consign";
const app = express();
consign({verbose: false})
    .include("./app/libs/middlewares.js")
    .then("./app/models")
    .then("./app/controllers")
    .then("./app/routes")
    .then("./app/libs/boot.js")
    .into(app);
module.exports = app;
