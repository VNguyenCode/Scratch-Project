import React, { Component } from "react";
// import { connect } from 'react-redux';
// import OutputBoxContainer from './outputBoxContainer';
import InputBox from "../components/InputBox";
// import from child components...
/// add imports

// provide pertinent state here - making a props object to send to react components
const mapStateToProps = (state) => ({});

// dispatch knows to get it to reducer because of connect on line 31
const mapDispatchToProps = (dispatch) => ({
  addURL: (obj) => dispatch(addURL(obj)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <InputBox
        dispatch = {props.addURL} />
        {/* <OutputBoxContainer /> */}
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;
