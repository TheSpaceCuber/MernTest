import React from "react";
import "./Navbar.css";
import logo from "..//Images/OneNUS-logo.png";
import {Button} from "./Button.js"
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export const Navbar = () => (
    <header className="navbar">
        <nav className="#039be5 light-blue darken-3 navbar-nav">

            <Link className="navbar-nav-logotext" to="/">OneNUS</Link>
            <Link className="navbar-nav-logo" to ="/">
            <img src={logo} width="35" height="35"></img>
            </Link>

            <div className="spacer"/>

            <div className = 'navbar-nav-items'>
                <ul className="navbar-nav-items-li-non-button">

                    <li>
                    <a className="git-button-text" href="https://github.com/TheSpaceCuber/OneNUS" target="_blank">GITHUB</a>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/">HOME</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/nushappenings">HAPPENINGS</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/form">REGISTER</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/login">LOGIN</Link>
                    </li>
{/* 
                    <li className="navbar-nav-items-non-button">
                        <Link to="/Register">REGISTER</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/Login">LOGIN</Link>
                    </li> */}
                    
                </ul>
            </div>
        </nav>
    </header >
)

export default Navbar;
