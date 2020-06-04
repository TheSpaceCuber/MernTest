import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { nushappenings } from "./components/NUShappenings";
import { Food } from "./components/Food";
import { Profile } from "./components/MyProfile";
import { Home } from "./components/Home";
import './App.css';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  render() {
    return (
        <div>
        <NavigationBar/>
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
