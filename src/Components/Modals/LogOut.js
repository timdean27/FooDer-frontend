import React from 'react'
import {useEffect} from 'react'
import axios from "axios";

function LogOut({setUserSignedIn, setAccessToken}) {
  
    const logoutFun =() => {
        console.log('Logged out')
        localStorage.removeItem('user')
        localStorage.removeItem('access_token')
        setUserSignedIn(null)
        setAccessToken(null)
    }

  
    return (
    <button className="loginOrOut-button" onClick={logoutFun}>Log Out</button>
  )
}
 
export default LogOut