<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import OutputBoxContainer from './OutputBoxContainer.jsx';
import InputBox from '../components/InputBox.jsx';
import * as actions from '../actions/action';
=======
import React from 'react';
import { connect } from 'react-redux';
import OutputBoxContainer from './OutputBoxContainer';
import InputBox from '../components/InputBox';
import * as actions from '../actions/action';
import Signup from '../components/Signup';
import Login from '../components/Login';
>>>>>>> master

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (urlObj) => dispatch(actions.addURL(urlObj)),
});

const MainContainer = ({ addURL, currentUser }) => (
  <div>
    <InputBox dispatchAddUrl={addURL} currentUser={currentUser} />

<<<<<<< HEAD
  render() {
    return (
      <div>
        <InputBox
          dispatchAddUrl={this.props.addURL}
          currentUser={this.props.currentUser}
        />

        <div id="outputboxcontainer">
          <OutputBoxContainer />
        </div>
      </div>
    );
  }
}
=======
    <div id="outputboxcontainer">
      <OutputBoxContainer />
    </div>
    <div>
      <Signup />
    </div>
    <div>
      <Login />
    </div>
  </div>
);
>>>>>>> master

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
