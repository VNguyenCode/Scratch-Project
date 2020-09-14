import React, { Component } from "react";
import MainContainer from './containers/MainContainer';
import Login from './components/login/Login'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>success from App.jsx</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
