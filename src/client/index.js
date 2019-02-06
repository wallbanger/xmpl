import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Router, Route } from "react-router";

// import { hot } from 'react-hot-loader/root'

import createHistory from "history/createBrowserHistory";
import reducer from "./reducer";

import App from "./components/App";

const store = createStore(reducer);

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
