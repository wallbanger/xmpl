import Koa from 'koa'
import logger from 'koa-morgan'
import helmet from 'koa-helmet'
import chalk from 'chalk'
import axios from 'axios';
import router from './router'
import io from 'socket.io'
import env from 'dotenv'

env.config();

const app = new Koa();
const socket = io();

const PORT = process.env.PORT;
const WS_PORT = process.env.WS_PORT;
const PATH_API = 'https://jsonplaceholder.typicode.com/todos/1';

const getApiAndEmit = async socket => {
    try {
        const response = await axios.get(PATH_API);
        socket.emit('websocket.todos', response.data);
    } catch (error) {
        console.log(chalk.red(`Error: ${error}`));
    }
};

socket.on('connection', socket => {
    console.log(chalk.yellow(`New client connected, id: ${socket.id}`));
    setInterval(() => getApiAndEmit(socket), 10000);
    socket.on('disconnect', () => console.log(chalk.yellow('Client disconnected')));
});

socket.listen(WS_PORT);

app
    .use(helmet())
    .use(logger('tiny'))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(PORT, () => console.log(chalk.black.bgGreen(`Listening on http://127.0.0.1:${PORT}/`)));
