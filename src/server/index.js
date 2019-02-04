const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const app = express();

const PORT = 8081;
const PATH_PUBLIC = __dirname + "/../../public/";
const PATH_DB = __dirname + "/../database/";
const database = path.join(PATH_DB + "index.json");

app.use(bodyParser.json());

const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(chalk.black.bgCyan(`Listening on http://127.0.0.1:${PORT}/`));
});

app.get("/db", function (req, res) {
    fs.readFile(database, "utf8", (err, data) => {
        res.end(data);
    });
});

app.get("/", function (req, res) {
    fs.readFile( path.join(PATH_PUBLIC + "index.html"), "utf8", (err, data) => {
        res.end(data);
    });
});


// class App {
//     constructor() {
//         this.express = express();
//         this.express.use(bodyParser.json());
//         this.mountRoutes();
//     }
//
//     mountRoutes() {
//         const router = express.Router();
//
//         router.get("/", (req, res) => {
//             res.end(fs.readFileSync(path.join(PATH_PUBLIC + "index.html")));
//         });
//
//         router.get("/db", (req, res) => {
//             fs.readFile(database, "utf8", (err, data) => {
//                 res.end(data);
//             });
//         });
//     }
// }
//
// const app = new App();
//
// app.express.listen(PORT, (err) => {
//     const host = server.address().address;
//     const port = server.address().port;
//
//     console.log(chalk.black.bgCyan(`Listening on http://127.0.0.1:${PORT}/`));
// });

