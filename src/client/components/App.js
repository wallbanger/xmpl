import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Login from "./Login";
import Home from "./Home";

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/home">Home</Link>
                <Link to="/login">Login</Link>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
            </div>
        )
    }
}

export default App;
