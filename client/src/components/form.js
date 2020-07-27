import React, { useState } from 'react';
import UserPool from '../UserPool';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        alert('Error signing up: ' + err.message)
        console.log(err)
      } else {
        alert('Sign up success!, '+ data.message)
        console.log(data)
      }
      
    })
  };

  return (

    <div className="container">
      <div style={{ marginTop: "4rem" }} className="row">
        <div className="col s8 offset-s2">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> here
            </h4>

          </div>
          <form onSubmit={onSubmit}>
            <div className="input-field col s12">
              <input placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="input-field col s12">
              <input placeholder="Password" type="text" //change type to password to use dots instead of text
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </div>
            <div className="col s12" style={{ textAlign: "center" }}>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable orange lighten-1"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

/*
<div>
      <form onSubmit = { onSubmit }>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3">Signup</button>
      </form>
    </div>
*/
export default Signup;
