import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';

// import Login, Signup, and create new container for inputBox/outputBox
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import MainContainer from './containers/MainContainer';


const App = () => (
  <div id="main">
    <Switch>
      <Route 
        exact
        path="/"
        component={Login}
      />
      <Route 
        exact
        path="/signup"
        component={Signup}
      />
      <Route 
        exact
        path="/main"
        component={MainContainer}
      />
    </Switch>
  </div>
);

export default App;
