const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");
const path = require("path");

const PATH_PUBLIC = `${__dirname}/../../public`;
const PATH_DB = `${__dirname}/../database`;

const database = path.join(`${PATH_DB}/index.json`);

class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.server = http.createServer(this.express);
        this.io = socketIo(this.server);

        this.mountRoutes();
    }

    mountRoutes() {
        this.express.get("/db", (req, res) => {
            fs.readFile(database, "utf8", (err, data) => {
                res.end(data);
            });
        });

        this.express.get("/", (req, res) => {
            fs.readFile(path.join(`${PATH_PUBLIC}/index.html`), "utf8", (err, data) => {
                res.end(data);
            });
        });
    }
}

module.exports = new App();
