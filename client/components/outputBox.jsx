import React, { Component } from "react";

class OutputBox extends Component {
  constructor(props) {
    super(props);
  }
  
  checkNow () {
    //triggered by onsubmit
    fetch('/main/checkNow', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.url_id),
    })
      .then(res => res.json())
      .then(data => {
        statusObj = {
          status: data.status,
          url_id: this.props.url_id
        }
      })
      .then(() => this.props.dispatchCheckStatus(statusObj))
      .catch ((err) => {
        console.error(err.messsage);
      })
    }
  render() {
    return (
      <div>
        <div className="outputBox" 
        url_id={this.props.url_id}
        > 
        
          {/* url: {this.props.url}
          status: {this.props.status}  */}
       
        <button onClick={ () => checkNow() }>check now</button>
        <button>uptime</button>
        </div>
        <h1>Output Box is a success! {this.props.url_id}</h1>
      </div>
    )
  }
 }


export default OutputBox;