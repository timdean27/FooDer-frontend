import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import AddFood from "../Components/Modals/AddFood";
import LoginPage from "./Modals/LoginPage/LoginPage";

const NavHeader = ({accessToken ,setAccessToken , setUserSignedIn}) => {
  const [loginData, setLoginData , ] = useState({
    loginName: '',
    email: '',
    password:"",
  })
  const [showModal, setShowModal] = useState(false)
  const [logedIn, setLogedIn] = useState(false)
  const loginFunc = () => {
    setShowModal(true);
  };
  const closeLogModalFunc = () => {
    setShowModal(false);
  }

  return (
    <header>
      <nav>
      <AddFood accessToken={accessToken}/>
      {!logedIn ? <button className="login-button" onClick={loginFunc} >Log In</button> : <button>Log Out</button>}
      {showModal ? <LoginPage closeLogModalFunc={closeLogModalFunc} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/> : null}
      </nav>
  </header>
  )
}

export default NavHeader