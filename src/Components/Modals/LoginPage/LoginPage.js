import React from 'react'

const LoginPage = ({closeLogModalFunc, loginFunction}) => {

  return (
    <div className="login-modal">
    <button className="close-log-mod-btn" onClick={closeLogModalFunc}>X</button>
    <form>
      <input id="loginName" type="text" onChange={loginFunction} placeholder="Login Name"></input>
      <input id="email" type="text" onChange={loginFunction} placeholder="Email"></input>
      <input id="password" type="text" onChange={loginFunction} placeholder="Password"></input>
    </form>
    </div>
  )
}

export default LoginPage