import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import MainContainer from './containers/MainContainer';

// import Login, Signup, and create new container for inputBox/outputBox
// import Login from 

const App = () => (
  <div id="main">
    <MainContainer />
    {/* <Switch>
      <Route 
        exact
        path="/"
        component={Login}
      />
      <Route 
        exact
        path="/auth"
        component={Signup}
      />
      <Route 
        exact
        path="/"
        component={}
      />
    </Switch> */}
  </div>
);

export default App;
