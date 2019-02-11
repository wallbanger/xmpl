import chalk from "chalk"
import axios from "axios";
import App from "./App"

const app =  new App();
const PORT = 8081;
const PATH_API = "https://jsonplaceholder.typicode.com/todos/2";

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
