import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/action.js";
import OutputBox from "../components/OutputBox";

// import child components

const mapStateToProps = (state) => ({
  // rule: pick what state properties you want from store and to pass to your children as props
  // because your children components cannot access the state in store
  // get the array state property from store
  // newEndpoint: '',

  urlList: state.outputs.urlList,
  // currentUser: state.outputs.currentUser,
  // status: state.outputs.status,
  url_id: state.outputs.currentUser,

});

const mapDispatchToProps = (dispatch) => ({
  // componenets can update state values
  // will be used to pass down disptach props to child components
  checkStatus: (statusObj) => dispatch(checkNow(statusObj)),
});

class OutputBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // initialize empty array
    const childrenList = [];

    //when user logs in, user will be stored in state.currentUser
    // pull state.currentuser from state and only render objects from urllist with urlList.username = currentuser
    // iterate through the endpointList array
    // for (let i = 0; i < props.urlList.length; i += 1) {
    //   if (this.props.urlList[i].username === props.currentUser) {
    // const urlObj = this.props.urlList[0];

    //     childrenList.push(

    //     );
    // push render boxes of div(outputBox) for each element
    // passing in relevant props and dispatch props
    // }
    // }

    return (
      // call outputBox component whenever add button in inputBox is clicked
      // state is changed
      // passes down state to outputBox(children)
      <div>
        success from outputbox container
        {/* {childrenList} */}
        <OutputBox
          // url_id={this.props.urlList[0].url_id}
          // dispatchCheckStatus={this.props.checkStatus}
          url_id={this.props.url_id}
          // status={this.props.status}
        />
        ;
      </div>

      // utilzing JSX, call array of child component boxes
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutputBoxContainer);
