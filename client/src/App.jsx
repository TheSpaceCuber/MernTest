import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import nushappenings from "./components/NUShappenings.js";
import { Food } from "./components/Food.js";
import { Profile } from "./components/MyProfile.js";
import { About } from "./components/About.js";
import './App.css';
import Navbar from "./components/Navbar";

import Landing from "./components/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
    render() {
      return (
          <div className="App">
              <Router>
          <Navbar/>
          <div style={{marginTop:'65px'}}></div>
              
                  <Route exact path = "/about" component = {About} />
                  <Route path = "/nushappenings" component = {nushappenings} />
                  <Route path = "/food" component = {Food} />
                  <Route path = "/profile" component = {Profile} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
              </Router>
              
          </div>
          );
      }
  }
  
  export default App;




