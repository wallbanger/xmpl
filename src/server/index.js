const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const http = require("http");
const socketIo = require("socket.io");

const chalk = require("chalk");
const axios = require("axios");

const PORT = 8081;
const PATH_PUBLIC = `${__dirname}/../../public`;
const PATH_DB = `${__dirname}/../database`;
const PATH_API = "https://jsonplaceholder.typicode.com/todos/2";

const database = path.join(`${PATH_DB}/index.json`);

class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.json());
        this.server = http.createServer(this.express);
        this.io = socketIo(this.server);
    }
}

const app = new App();

app.io.on("connection", socket => {
    console.log("New client connected");
    setInterval(() => getApiAndEmit(socket), 10000);
    socket.on("disconnect", () => console.log("Client disconnected"));
});

const getApiAndEmit = async socket => {
    try {
        const res = await axios.get(PATH_API);
        socket.emit("websocket.todos", res.data);
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};

app.server.listen(PORT, () => console.log(chalk.black.bgCyan(`Listening on http://127.0.0.1:${PORT}/`)));

app.express.get("/db", (req, res) => {
    fs.readFile(database, "utf8", (err, data) => {
        res.end(data);
    });
});

app.express.get("/", (req, res) => {
    fs.readFile( path.join(`${PATH_PUBLIC}/index.html`), "utf8", (err, data) => {
        res.end(data);
    });
});
