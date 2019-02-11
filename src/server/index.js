import Koa from 'koa'
import logger from 'koa-morgan'
import helmet from 'koa-helmet'
import http from 'http'
import socketIo from 'socket.io'
import chalk from 'chalk'
import axios from 'axios';
import router from './router'

const app = new Koa();
const server = http.createServer(app.callback());
const io = socketIo(server, {});
const PORT = 8081;

io.on("connection", socket => {
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

// import env from 'dotenv'
// env.config()
// const port = process.env.PORT

app
    .use(helmet())
    .use(logger('tiny'))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(PORT, () => {
        console.log(chalk.black.bgCyan(`Listening on http://127.0.0.1:${PORT}/`))
    });
