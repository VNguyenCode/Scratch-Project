import React, { Component } from "react";
import MainContainer from './containers/MainContainer';
import Login from './components/login/Login'

class App extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <Login/>
        )
    }
=======
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
>>>>>>> 198c2077624adf2e6e277aa8e661f5810d90535a
}

export default App;
