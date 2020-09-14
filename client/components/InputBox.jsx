import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addURLNow } from '../actions/action.js' 
// import '@babel/plugin-proposal-class-properties' from '../../webpack.config.js';

class InputBox extends Component {
  constructor(props) {
    super(props)
    // this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onSubForm (e) {
    e.preventDefault();
    console.log(e.target[0].value)
    addURLNow(e.target[0].value)
  }


render() {
  return (
    <div>
      {/*  will have to update with id class css */}
      <form onSubmit={this.onSubForm}>
        {/* // (e) => { */}
        {/* // e.preventDefault(); */}
        {/* // this.sendUrl(e.target.value)}> */}
        {/* <input type="text" placeholder="Enter endpoint here..."></input>
        <button type='submit'>Add</button> */}
      <input
      type="text"
      className="form-control"
    // value={description}
    //  onChange={handleChange}
    />
    <button className="btn btn-success">Add</button>
      </form>
    </div>
  )
}
}

export default InputBox