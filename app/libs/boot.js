import https from "http";
import fs from "fs";

module.exports = app => {

    https.createServer(app)
        .listen(app.get("port"), () => {
            console.log(`NTask API - porta ${app.get("port")}`);
        });
};
