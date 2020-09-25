import React from 'react';
import {
  Redirect,
  Link,
  useHistory,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './loginstyle.css';
import Signup from './Signup';
import axios from 'axios';

class MyForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { username, password} = this.state;
    // const data = new FormData(event.target);
    //const { fname, lname, phone } = this.state;
    axios.post('http://localhost:3000/auth/login', { username, password})
      .then((result)=> {
        console.log(result)
      })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
      <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={this.onChange}
        placeholder = 'Enter your username'
      />
      </div>
      <input
        type="text"
        name="password"
        value={password}
        onChange={this.onChange}
        placeholder = 'Enter your password'
      />
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
    );
  }
}

export default MyForm;

// const Login = () => {
//   return (
//     <React.Fragment>
//       <div className="flex-container">
//         <div className="flex-item">
//           <div className="logincontainer">
//             <h1>Welcome!</h1>
//             <form method="POST" action="/auth/login">
//               <div className="input">
//                 <p>Username</p>
//                 <div>
//                   <input name="username" type="text"></input>
//                 </div>
//                 <p>Password</p>
//                 <div>
//                   <input name="password" type="text"></input>
//                 </div>
//                 <input type="submit" value="login"></input>
//               </div>
//             </form>
//           </div>

//           <div className="registerbutton">
//             <p>Don't have an account yet? </p>
//             <Link to="/signup" className="btn btn-primary">
//               Need to sign up?
//             </Link>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Login;
/* <div className="flex-container">
        <div className="flex-item">
          <div className="logincontainer">
            <form onSubmit={this.handleSubmit}>
              <div className="child">
                <div>
                  <label htmlFor="username">Username</label>
                </div>
                <input id="username" name="username" type="text" />
              </div>
              <div className="child">
                <div>
                  <label htmlFor="password">Password</label>
                </div>
                <input id="password" name="password" type="text" />
              </div>
              <div className="child">
                <div>
                  <label htmlFor="birthdate">Phone Number</label>
                </div>
                <input id="birthdate" name="birthdate" type="text" />
              </div>
              <button>Log In</button>
              <button>Sign Up</button>
            </form>
          </div>
        </div>
      </div> */

