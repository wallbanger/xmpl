import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Login from "./Login/";
import Home from "./Home/";
import Header from "./Header";

import { hot } from 'react-hot-loader'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default hot(module)(App);
