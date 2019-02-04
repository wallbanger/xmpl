import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: false,
            endpoint: "http://127.0.0.1:8081"
        };
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("websocket.todos", data => {
            this.setState({ response: data })
        });
    }

    render() {
        const { response } = this.state;

        return (
            <div>
                <h2>React app ahaha</h2>
                <p>async title by WS server (wait 10 sec): { response.title }</p>
            </div>
        )
    }
}

export default App;
