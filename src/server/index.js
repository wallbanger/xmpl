const chalk = require("chalk");
const axios = require("axios");

const PORT = 8081;
const PATH_API = "https://jsonplaceholder.typicode.com/todos/2";

const app = require("./App");

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

app.server.listen(PORT, () => {
    console.log(chalk.black.bgCyan(`Listening on http://127.0.0.1:${PORT}/`))
});
