import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action';

const mapStateToProps = (state) => ({
  username: state.form.signup.username,
  password: state.form.signup.password,
  phoneNumber: state.form.signup.phoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  handleFormInput: (newState) => dispatch(actions.signupInput(newState)),
  handleFormSubmit: (newState) => dispatch(actions.signupSubmit(newState)),
});

/*  exporting Signup component here without connecting it to store
 *  for testing purposes only
 */
export const Signup = ({
  username,
  password,
  phoneNumber,
  handleFormInput,
  handleFormSubmit,
}) => (
  <div className="flex-container">
    <div className="flex-item">
      <div className="login-signupcontainer">
        <img
          id="uptime-logo"
          src="./src/assets/angle-circle-arrow-up.png"
          alt=""
        />
        <h1>UPTIME</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFormSubmit({
              username,
              password,
              phoneNumber,
            });
          }}
        >
          <div className="input">
            <div className="input-fields">
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={(e) => handleFormInput(e.target)}
              />
            </div>
            <div className="input-fields">
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => handleFormInput(e.target)}
              />
            </div>
            <div className="input-fields">
              <input
                name="phoneNumber"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => handleFormInput(e.target)}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
