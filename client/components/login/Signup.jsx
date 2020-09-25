import React from 'react';
import {
  Redirect,
  Link,
  useHistory,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
      phonenumber: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(event) {
    event.preventDefault();
    const { username, password, phonenumber } = this.state;
    // const data = new FormData(event.target);
    //const { fname, lname, phone } = this.state;
    axios
      .post('http://localhost:3000/auth/register', {
        username,
        password,
        phonenumber,
      })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    const { username, password, phonenumber } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChange}
            placeholder="Enter your username"
          />
        </div>
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Enter your password"
        />
        <div></div>
        <input
          type="text"
          name="phonenumber"
          value={phonenumber}
          onChange={this.onChange}
          placeholder="Enter your password"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
