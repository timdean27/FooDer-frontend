import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const SignUP = ({closeSignUPMoFunc , setUserSignedIn}) => {
  

  const [formInfo, setFromInfo] = useState({email:'', username:'', password:''})
  const [networkErrMsg, setNetworkErrMsg] = useState(null)
  const [clientErrMsg, setClientErrMsg] = useState(null)

  const statusCodeToErr = (responseObj) => {
      setNetworkErrMsg(`Network Error of code: ${responseObj.status}`)
  }

  const clientFormValidation = (formInfo) => {
      const blankFields = Object.entries(formInfo)
                                .filter(kv => kv[1] === '')
      if (blankFields.length > 0) {
          setClientErrMsg(`${blankFields[0][0]} can not be blank`)
          return false
      }
      setClientErrMsg(null)
      return true
  }

  const handleChange = (e) => {
      setFromInfo({...formInfo, [e.target.id]: e.target.value})
  }

  const handleLogin = (e) => {
      
      console.log(formInfo)
      e.preventDefault()

      setNetworkErrMsg(null)
      if (!clientFormValidation(formInfo)) {
          return
      }

      const REACT_APP_DATABASE_URL_DJANGO = process.env.REACT_APP_DATABASE_URL_DJANGO;

      const loginEndpoint = "api/users/";

      fetch( REACT_APP_DATABASE_URL_DJANGO + loginEndpoint, 
              {
                  method: 'POST',
                  headers: {
                      'Content-Type':'application/json',
                  },
                  body: JSON.stringify(formInfo)
              }
      )
          .then(res => {
              if (res.ok) {
                  return res.json()
              } else {
                  statusCodeToErr(res)
                  return Promise.resolve(null)
              }
          })
          .then(data => {
              if (!data) {
                  console.log(`problem with network request: ${networkErrMsg}`)
              } else {
                  
                  console.log(data)
                  setUserSignedIn(data.username)
                  closeSignUPMoFunc()
                  // add tokens to localstorage here
                  // redirect here
              }
          })
  }


  return (
    <div className="login-modal">
    <h3>Sign UP</h3>
    <button className="close-log-mod-btn" onClick={closeSignUPMoFunc}>
      X
    </button>
    <form onSubmit={handleLogin}>
      <label>username:</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={handleChange}
      />
      <label>email:</label>
      <input
      id="email"
      name="email"
      type="text"
      onChange={handleChange}
    />
      <label>password:</label>
      <input
        id="password"
        name="username"
        type="password"
        onChange={handleChange}
      />
     

      <button className="login-btn" type="submit">
        Sign up
      </button>
    </form>
  </div>
  )
}

export default SignUP