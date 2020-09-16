import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/action';
import OutputBox from '../components/outputBox';

const mapStateToProps = (state) => ({
  urlList: state.outputs.urlList,
  url_id: state.outputs.urlList[0].url_id,
  url: state.outputs.urlList[0].url,
});

const mapDispatchToProps = (dispatch) => ({
  checkStatus: (statusObj) => dispatch(actions.checkNow(statusObj)),
});

const OutputBoxContainer = ({ urlList, checkStatus }) => (
  <div id="outputBox">
    {urlList.map((index) => (
      <OutputBox
        key={index.url_id}
        url_id={index.url_id}
        url={index.url}
        status={index.status}
        dispatchCheckStatus={checkStatus}
      />
    ))}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(OutputBoxContainer);
