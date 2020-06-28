import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "../Images/yalenus.jpg";

class Landing extends Component {
  render() {
    return (
      <div className="LandingClass" style={{backgroundImage: `url(${banner})`, height:"920px"}}>
      <div style={{ height: "75vh"}} className="container valign-wrapper">
        <div className="row">
          <div className="OneNUS name" style={{color: "white", textAlign:"center"}}>
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
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
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
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Food
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      </div>

                   
    );
  }
}
export default Landing;