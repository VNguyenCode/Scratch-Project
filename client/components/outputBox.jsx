import React, { Component } from 'react';
import axios from 'axios';

class OutputBox extends Component {
  constructor(props) {
    super(props);
    this.checkNow = this.checkNow.bind(this);
  }

  checkNow() {
    return axios
      .post('http://localhost:3000/main/checkNow', {
        url_id: this.props.url_id,
        url: this.props.url,
      })
      .then((status) =>
        this.props.dispatchCheckStatus({
          status: status.data.status,
          url_id: this.props.url_id,
        })
      )
      .catch((err) => {
        console.error(err.messsage);
      });
  }

  render() {
    return (
      <div id="boxes">
        <div className="api-cards-text" url_id={this.props.url_id}>
          <div className="url-text">{this.props.url}</div>
          <div className="status-text">{this.props.status}</div>
          <div className="output-buttons">
            <button onClick={this.checkNow}>STATUS</button>
            <button>UPTIME</button>
          </div>
        </div>
      </div>
    );
  }
}

export default OutputBox;
