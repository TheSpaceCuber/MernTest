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
        <nav className="blue navbar-nav">

            <Link className="navbar-nav-logo" to ="/">
            <img src={logo} width="40" height="40"></img>
            </Link>

            <Link className="navbar-nav-logotext" to="/">OneNUS</Link>

            <div className="spacer"/>

            <div className = 'navbar-nav-items'>
                <ul className="navbar-nav-items-li-non-button">

                    <li>
                    <a className="git-button-text" href="https://github.com/TheSpaceCuber/OneNUS" target="_blank">GITHUB</a>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/about">ABOUT US</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/nushappenings">HAPPENINGS</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/food">FOOD</Link>
                    </li>

                    <li className="navbar-nav-items-non-button">
                        <Link to="/form">LOGIN / REGISTER</Link>
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
