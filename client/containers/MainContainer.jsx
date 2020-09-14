import React, { Component } from "react";
import { connect } from "react-redux";
import OutputBoxContainer from "./OutputBoxContainer.jsx";
import InputBox from "../components/InputBox.jsx";

// provide pertinent state here - making a props object to send to react components
const mapStateToProps = (state) => ({});

// dispatch knows to get it to reducer because of connect on line 31
const mapDispatchToProps = (dispatch) => ({
  addURL: (urlObj) => dispatch(addURL(urlObj)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        maincontainer
        <InputBox dispatchAddUrl={this.props.addURL} />
        <OutputBoxContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
