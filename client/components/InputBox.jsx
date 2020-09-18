import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { AddURL } from '../actions/action.js';
import * as actions from '../actions/action.js';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.onSubForm = this.onSubForm.bind(this);
  }

  onSubForm(e) {
    e.preventDefault();
    const input = document.getElementById('addUrlForm');
    const url = input.value;
    return axios
      .post('http://localhost:3000/main/addURL', url)
      .then((result) => {
        this.props.dispatchAddUrl({
          username: this.props.currentUser,
          url_id: result.data.url_id,
          status: result.data.status,
          url: url,
        });
      })
      .catch((err) => console.log('err onsubform', err));
  }

  render() {
    return (
      <div id="inputBox">
        <img
          id="uptime-logo"
          src="./src/assets/angle-circle-arrow-up.png"
          alt=""
        />
        <h1>UPTIME</h1>
        <input id="addUrlForm" type="text" name="url"></input>
        <button type="submit" onClick={this.onSubForm}>
          ADD URL
        </button>
      </div>
    );
  }
}

export default InputBox;
