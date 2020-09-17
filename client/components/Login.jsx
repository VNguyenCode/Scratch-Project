import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/action';

const mapStateToProps = (state) => ({
  username: state.form.login.username,
  password: state.form.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  handleFormInputLogin: (newState) => dispatch(actions.loginInput(newState)),
  handleFormSubmitLogin: (newState) => dispatch(actions.loginSubmit(newState)), //loginFetchData
});

/*  exporting Login component here without connecting it to store
 *  for testing purposes only
 */
export const Login = ({
  username,
  password,
  handleFormInputLogin,
  handleFormSubmitLogin,
}) => (
  <div className="flex-container">
    <div className="flex-item">
      <div className="login-container">
        {/* <h1>Up ⏰</h1> */}
        <img
          id="uptime-logo"
          src="./src/assets/angle-circle-arrow-up.png"
          alt=""
        />
        <h1>UPTIME</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmitLogin({
              username,
              password,
            });
          }}
        >
          <div className="input">
            <div id="username-field">
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => handleFormInputLogin(e.target)}
              />
            </div>
            <div id="password-field">
              <input
                name="password"
                type="text"
                placeholder="Password"
                onChange={(e) => handleFormInputLogin(e.target)}
              />
            </div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>

      <div className="registerbutton">
        <Link to="/signup" className="btn btn-primary">
          Create Account
        </Link>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
