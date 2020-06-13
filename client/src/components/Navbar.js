import React from "react";
import "./Navbar.css"
import logo from "..//Images/OneNUS-logo.png";

export const Navbar = () => (
    <header className="navbar">
        <nav className="navbar-nav">

            <a className="navbar-nav-logo" href="/">
            <img src={logo} width="40" height="40"></img>
            </a>

            <a className="navbar-nav-logotext" href="/">OneNUS</a>

            <div className="spacer"/>

            <div className = 'navbar-nav-items'>
                <ul>
                    <li><a href="/nushappenings">HAPPENINGS</a></li>
                    <li><a href="/food">FOOD</a></li>
                    <li><a href="/profile">MY PROFILE</a></li>
                </ul>
            </div>
        </nav>
    </header >
)

export default Navbar;
