import React from 'react'


const Login = () => {
  return(
    <div className = "logincontainer">
      <h1>Sign Up</h1>
      <form method = "POST" action= '/api/login'> 
      <div className="input">
      <p>Username</p>
      <div><input name = "username" type = "text"></input></div>
      <p>Password</p>
      <div><input name = "password" type = "text"></input></div>
      <p>Phone Number</p>
      <div><input name = "password" type = "text"></input></div>
      <input type = "submit" value = 'Create Account'></input>
      </div>
      </form>
    </div>
  )
}

export default Login