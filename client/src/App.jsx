import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { nushappenings } from "./components/NUShappenings.js";
import { Food } from "./components/Food.js";
import { Profile } from "./components/MyProfile.js";
import { Home } from "./components/Home.js";
import './App.css';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
        <div className="App">
        <NavigationBar/>
        <div style={{marginTop:'65px'}}></div>
            <Router>
                <Route exact path = "/" component = {Home} />
                <Route path = "/nushappenings" component = {nushappenings} />
                <Route path = "/food" component = {Food} />
                <Route path = "/profile" component = {Profile} />
            </Router>
            
        </div>
        );
    }
}

export default App;
