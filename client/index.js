import React from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import thunk from 'redux-thunk'
// import Login from '../client/components/login/Login.jsx'
// import Signup from '../client/components/login/Signup.jsx'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import store from "./store";

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

//https://redux.js.org/advanced/usage-with-react-router

render(
  // <h1>Index.js rendered</h1>
  //   (
  // <Router>
  //   <Switch>
  //     <Route path = "/login" component = {Login}/>
  //     <Route path = "/signup" component = {Signup}/>
  //   </Switch>
  // </Router>
  // )
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
