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
    <form method="POST" action="/auth/signup">
      <div className="input">
        <p>Username</p>
        <div>
          <input name="username" type="text" onChange={(e) => handleFormInput(e.target)} />
        </div>
        <p>Password</p>
        <div>
          <input name="password" type="text" />
        </div>
        <p>Phone Number</p>
        <div>
          <input name="phonenumber" type="text" />
        </div>
        <input type="submit" value="Create Account" />
      </div>
    </form>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
