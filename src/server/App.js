const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");

class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.server = http.createServer(this.express);
        this.ws = socketIo(this.server);
    }
}

module.export = new App();
