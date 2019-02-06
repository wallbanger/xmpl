import React, { Component } from "react";
import { Route } from "react-router";
import Login from "./Login/";
import Home from "./Home/";
import Header from "./Header/";

import { hot } from 'react-hot-loader'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
            </div>
        )
    }
}

export default hot(module)(App);
