import React, { useState } from 'react';
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    
    const onSubmitSignUp = event => {
        event.preventDefault();

        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
                console.log(err);
                alert(err + "UserPool sign up error");
            }
            console.log(data)
            alert(data)
        })
    };

    const onSubmitLogin = event => {
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
                console.log('onSuccess: ', data);
                alert('success')
            },

            onFailure: err => {
                console.log('onFailure: ', err);
                alert('Failed to authenticate');
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired: ', data);
                alert('newPasswordRequired')
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
                    <form onSubmit={onSubmitLogin}>
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
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Login
                            </button>
                        </div>
                    </form>








                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b> here
            </h4>

          </div>
          <form onSubmit={onSubmitSignUp}>
            <div className="input-field col s12">
              <input placeholder="Email"
                value={emailRegister}
                onChange={event => setEmailRegister(event.target.value)}
              />
            </div>
            <div className="input-field col s12">
              <input placeholder="Password" type="text" //change type to password to use dots instead of text
                value={passwordRegister}
                onChange={event => setPasswordRegister(event.target.value)}
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
                Register
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

export default Form;