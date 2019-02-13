import React, { Component } from "react";
import socketIOClient from "socket.io-client"
import "./style.scss";

const socket = socketIOClient("http://127.0.0.1:8082");
const someAction = data => console.log("ws", data);

class Home extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
        }
    }

    componentDidMount() {
        socket.on("websocket.todos", someAction)
    }

    componentWillUnmount() {
        socket.removeListener('websocket.todos', someAction);
    }

    render() {
        const { response } = this.state;

        return (
            <div className="home">
                <h2>React app ahaha</h2>
                <p>async title by WS server (wait 10 sec): { response.title }</p>
            </div>
        )
    }
}

export default Home;
