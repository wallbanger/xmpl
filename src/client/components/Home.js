import React, { Component } from "react";
import socketIOClient from "socket.io-client";
const socket = socketIOClient("http://127.0.0.1:8081");

class Home extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
        }
    }

    componentDidMount() {
        socket.on("websocket.todos", data => {
            this.setState({ response: data })
        })
    }

    render() {
        const { response } = this.state;

        return (
            <div>
                <h2>React app ahaha</h2>
                <p>async title by WS server (wait 10 sec): { response.title }</p>
                <hr/>
            </div>
        )
    }
}

export default Home;
