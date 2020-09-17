import React from 'react';
import { connect } from 'react-redux';
import OutputBoxContainer from './OutputBoxContainer';
import InputBox from '../components/InputBox';
import * as actions from '../actions/action';
import Signup from '../components/Signup';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (urlObj) => dispatch(actions.addURL(urlObj)),
  loginFetchData: (url) => dispatch(actions.loginFetchData(url)),
});

const MainContainer = ({ addURL, currentUser }) => (
  <div>
    <InputBox dispatchAddUrl={addURL} currentUser={currentUser} />
    <div id="outputboxcontainer">
      <OutputBoxContainer />
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
