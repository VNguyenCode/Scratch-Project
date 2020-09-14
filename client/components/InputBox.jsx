<<<<<<< HEAD
// import React, { Component } from 'react';
// // import { connect } from 'react-redux';

// class InputBox extends Component {
//   constructor(props) {
//     super(props)
//   }

//   // function making api request
//   sendURL = async (url) => {
//     // making a request to api
//     try {
//       //1st action
//       const send = await fetch(addURLendpoint, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(url),
//       })
//       //send = response object with the status as property 
//       const data = await send.json(); //.then()
//       // data = {status: 200}
//       // transform data into the form that we want it 
//       const obj = {
//         url: url,
//         status: data.status
//       }
//       // how do I get this object into state 
//       //WE NEED TO DISPATCH 
//       props.dispatch(obj)
//       //props.dispatch = addURL(obj)

//     } catch (err) {
//       console.error(err.messsage)
//     }
//     // we are se nding the endpoint URL in the form of req.body as an object
    
//   }

=======
import React, { Component } from 'react';
import { connect } from 'react-redux';

class InputBox extends Component {
  constructor(props) {
    super(props)
  }

  // function making api request
 sendURL () {
   async (url)=> {
    // making a request to api
    try {
      const send =  await fetch('/main/addURL', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      })
      const data = await send.json();
      
      // transform the data into the form we want by declaring an object constant
      const urlObj = {
        url: url,
        status: data.status,
        url_Id: data.url_Id
      }
      
      // call dispatch method on urlObj - props.dispatchAddUrl = addURL(urlObj) from MainContainer return statement
      props.dispatchAddUrl(urlObj);
      
    } catch (err) {
      console.error(err.messsage);
    }
  }
}
>>>>>>> 198c2077624adf2e6e277aa8e661f5810d90535a

//   render() {
//     return (
//       <div>
//         {/*  will have to update with id class css */}
//         <form onSubmit={(e) => {
//           sendUrl(e.target.value);
//         }
//         }>
//           <input type="text" placeholder="Enter endpoint here..."></input>
//           {/* remember to fill in onclick based on dispatch method created */}
//           <button type='submit'>Add</button>

//         </form>
//       </div>

//     )
//   }
// }

// export default InputBox;