import React from 'react';
import "./Home.css";
import banner from "../Images/yalenus.jpg";
import about_picture from "../Images/code.png";
import who_picture from "../Images/student (1).png";

export const Home = () => (
    <header className="home-page">

        <div className="home-banner">
            <img src={banner}/>
            <p>OneNUS</p>
        </div>

        <div className="home-who-are-we">
            <img src ={who_picture}/>
            <div className="home-text">
                <h1>Who are we?</h1>
                    <p>We a Y1 NUS Computing duo working on ONENUS as an Orbital project. Through our web application, we hope to bring better accessibililty to NUS-related information to all students and staff.</p>
            </div>
        </div>


        <div className="home-about">
            <img src ={about_picture}/>
            <div className="home-text">
                <h1>Our Motivation</h1>
                    <p>As a NUS student, do you often find that there are too many decentralised information channels? We certainly think so. Because different NUS organisations use various decentralised communication channels – such as email lists, NUSync, Telegram channels, and NUS TalentConnect – we often find it difficult to find the information we are interested in.
                    Imagine a centralised platform which is able to sieve out all these publicity efforts and across various platforms, with minimum spam. Imagine, OneNUS."</p>
            </div>
        </div>
    </header>
)