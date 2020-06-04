import React from "react";
import "./NavigationBar.css"
import logo from "./OneNUS-logo.png";

export const NavigationBar = () => (
    <header className="navbar">
        <nav className="navbar-nav">

            <div className="navbar-nav-logo"> 
            <a href="/"> 
            <img src={logo} width="70" height="70"></img>  ONENUS
            </a>
            </div>

            <div className="spacer"/>

            <div className = 'navbar-nav-items'>
                <ul>
                    <li><a href="/nushappenings">NUShappenings</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/food">Food</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default NavigationBar;