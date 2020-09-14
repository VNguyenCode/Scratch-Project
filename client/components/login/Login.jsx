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

class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/auth/login', {
      method: 'POST',
      body: data,
    })
      .then((response) => response.json())
      .then(props.dispatch('change the state in the store'));
  }

  render() {
    return (
      <div className="flex-container">
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
                  <label htmlFor="email">Password</label>
                </div>
                <input id="email" name="email" type="email" />
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
      </div>
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
