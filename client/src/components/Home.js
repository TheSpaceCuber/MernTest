import React from 'react';
import "./Home.css";
import banner from "../Images/NUS.png";
import motivation_picture from "../Images/code.png";
import who_picture from "../Images/student (1).png";
import user_stories_picture from "../Images/target.png";
import { Link } from "react-router-dom";

export const Home = () => (
    <>
    <div className="LandingClass" style={{backgroundImage: `url(${banner})`, height:"460px"}}>
      <div style={{ height: "500px"}} className="container valign-wrapper">
        <div className="row">
          <div className="banner-words" style={{color: "white", textAlign:"center"}}>
            <h1>
              <b>OneNUS</b>
            </h1>
            <p className="flow-text white-text text-darken-1">
              Hassle free updates, at your fingertips. 
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/nushappenings"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange lighten-1"
              >
                Happenings
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/food"
                style={{
                  width: "160px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable orange lighten-1"
              >
                Food
              </Link>
            </div>
          </div>
          
        </div>
        </div>
      </div>
        
        <div className="about-who-are-we">
            <img src ={who_picture}/>
            <div className="about-text">
                <h1>Who are we?</h1>
                    <p>We are two Y1 NUS Computing students working on ONENUS as an Orbital project. Through our web application, we hope to bring better accessibililty to NUS-related information to all students and staff.</p>
            </div>
        </div>


        <div className="about-motivation">
            <img src ={motivation_picture}/>
            <div className="about-text">
                <h1>Our Motivation</h1>
                    <p>As a NUS student, do you often find that there are too many decentralised information channels? We certainly think so. Because different NUS organisations use various decentralised communication channels – such as email lists, NUSync, Telegram channels, and NUS TalentConnect – we often find it difficult to find the information we are interested in.
                    Imagine a centralised platform which is able to sieve out all these publicity efforts and across various platforms, with minimum spam. Imagine, OneNUS."</p>
            </div>
        </div>


        <div className="about-user-stories">
            <img src ={user_stories_picture}/>
            <div className="about-text">
                <h1>User Stories</h1>
                    <ol className="about-list">
                        <li>As a freshman, I want to know which FOPs I can sign up for, co-curricular activities I can participate in, on-campus residential options at one glance.</li>
                        <li>As a sophomore, I want to know the different student bodies I can apply to at one glance. </li>
                        <li>As a senior in my penultimate or final year, I want to know what are the on-campus recruitment talks/ off-campus office visit trips at one glance.</li>
                    </ol>
            </div>
        </div>
    </>
);