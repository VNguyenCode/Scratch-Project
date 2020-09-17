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

const Signup = ({ username, password, phoneNumber, handleFormInput, handleFormSubmit }) => (
  <div className="signupcontainer">
    <h1>Sign Up</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFormSubmit({
        username,
        password,
        phoneNumber,
      });
    }}>
      <div className="input">
        <p>Username</p>
        <div>
          <input name="username" type="text" onChange={(e) => handleFormInput(e.target)} />
        </div>
        <p>Password</p>
        <div>
          <input name="password" type="password" onChange={(e) => handleFormInput(e.target)} />
        </div>
        <p>Phone Number</p>
        <div>
          <input name="phoneNumber" type="text" onChange={(e) => handleFormInput(e.target)} />
        </div>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
