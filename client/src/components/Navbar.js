import React from "react";
import "./Navbar.css";
import logo from "..//Images/OneNUS-logo.png";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

export const Navbar = () => (
    <header className="navbar">
        <nav className="navbar-nav">

            <a className="navbar-nav-logo" href="/">
            <img src={logo} width="40" height="40"></img>
            </a>

            <Link className="navbar-nav-logotext" to="/">OneNUS</Link>

            <div className="spacer"/>

            <div className = 'navbar-nav-items'>
                <ul>
                    <li>
                        <Link to="/items">HAPPENINGS</Link>
                    </li>
                    <li>
                        <Link to="/food">FOOD</Link>
                    </li>
                    <li>
                        <Link to="/profile">MY PROFILE</Link>
                    </li>
                    <li>
                        <Link to="/Register">REGISTER</Link>
                    </li>
                    <li>
                        <Link to="/Login">LOGIN</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </header >
)

export default Navbar;
