import React from 'react';

const Signup = () => (
  <div className="signupcontainer">
    <h1>Sign Up</h1>
    <form method="POST" action="/auth/signup">
      <div className="input">
        <p>Username</p>
        <div>
          <input name="username" type="text" />
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

export default Signup;
