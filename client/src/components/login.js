import React, { useState } from 'react';
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = event => {
        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                alert('Login Successful!')
                console.log('onSuccess: ', data);
            },

            onFailure: err => {
                alert('Error: ' + err.message)
                console.log('onFailure: ', err);
            },

            newPasswordRequired: data => {
                alert('New Password required: ' + data.message)
                console.log('newPasswordRequired: ', data);
            }
        });
    };

    return (
        <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4>
                            <b>Login</b> here
            </h4>

                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input placeholder="Email" type="text"
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
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Login
              </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    /*
    return (
      <div>
        <form onSubmit = { onSubmit }>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <div className="input-field col s12">
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          </div>
          
  
          <button style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem",
                      textAlign: "center"
                    }}
                    type="submit"
                    className="btn-large waves-effect waves-light hoverable blue accent-3">Login</button>
        </form>
      </div>
    );
  
  */
}

export default Login;
