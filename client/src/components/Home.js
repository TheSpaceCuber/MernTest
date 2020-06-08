import React from 'react';
import "./Home.css";
import banner from "../Images/yalenus.jpg";

export const Home = () => (
    <div className="home-banner">
        <img src={banner}/>
        <p>OneNUS</p>
    </div>
)