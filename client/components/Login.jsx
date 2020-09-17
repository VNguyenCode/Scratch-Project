import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Login = () => (
  <>
    <div className="flex-container">
      <div className="flex-item">
        <div className="login-container">
        <h1>Up ⏰</h1>
          <form method="POST" action="/auth/login">
            <div className="input">
              <div>
                <input name="username" type="text" placeholder="Username" />
              </div>
              <div>
                <input name="password" type="text" placeholder="Password" />
              </div>
              <input type="submit" value="login" />
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
  </>
);

export default Login;
