import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/home" className="header__link">Home</Link>
                <Link to="/login" className="header__link">Login</Link>
            </div>
        )
    }
}

// const Header = () => (
//     <div className="header">
//         <p className="header__link">content</p>
//     </div>
// );

export default Header;
