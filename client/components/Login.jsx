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
  handleFormSubmitLogin: (newState) => dispatch(actions.loginSubmit(newState)),
});

const Login = ({
  username,
  password,
  handleFormInputLogin,
  handleFormSubmitLogin,
}) => (
  <div className="flex-container">
    <div className="flex-item">
      <div className="login-container">
        <h1>Up ⏰</h1>
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
            <div>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => handleFormInputLogin(e.target)}
              />
            </div>
            <div>
              <input
                name="password"
                type="text"
                placeholder="Password"
                onChange={(e) => handleFormInputLogin(e.target)}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>

      <div className="registerbutton">
        <p>Don&apos;t have an account yet? </p>
        <Link to="/signup" className="btn btn-primary">
          Need to sign up?
        </Link>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
