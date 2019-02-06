import React, { Component } from "react";
import "./style.scss";

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <h2>Login</h2>
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="password"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
