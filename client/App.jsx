import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

// import Login, Signup, and create new container for inputBox/outputBox
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import MainContainer from './containers/MainContainer';
import SignUpForm from './components/login/Signup';

// mapping state to props, so props will get state values
const mapStateToProps = (state) => ({
  isLoggedIn: state.form.isLoggedIn,
});

// mapping dispatch to props, each key is a method which dispatches an action creator
const mapDispatchToProps = (dispatch) => ({});

const App = ({ isLoggedIn }) => (
  <div id="main">
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/main" component={MainContainer} />
      <Route exact path="/">
        {isLoggedIn ? <Redirect to="/main" /> : <Login />}
      </Route>
    </Switch>
  </div>
);

// connect state props & dispatch props to the App props
export default connect(mapStateToProps, mapDispatchToProps)(App);
