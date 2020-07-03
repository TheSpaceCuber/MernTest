import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import nushappenings from "./components/NUShappenings.js";
import  Food  from "./components/Food.js";
import { Profile } from "./components/MyProfile.js";
import { About } from "./components/About.js";
import './App.css';
import Navbar from "./components/Navbar";

import Landing from "./components/Landing";
import Form from "./components/form"

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <div style={{ marginTop: '63px' }}></div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/about" component={About} />
                    <Route path="/nushappenings" component={nushappenings} />
                    <Route path="/food" component={Food} />
                    <Route path="/form" component={Form} />
                </Router>
            </div>
        );
    }
}

export default App;




