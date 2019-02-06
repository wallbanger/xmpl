import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import Login from "./Login";
import Home from "./Home";

import { hot } from 'react-hot-loader'

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

export default hot(module)(App);
