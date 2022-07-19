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
  const [showNewFoodModal, setShowNewFoodModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [logedIn, setLogedIn] = useState(false)
  
  const openloginMoFunc = () => {
    setShowLoginModal(true);
  };
  const closeLogModalFunc = () => {
    setShowLoginModal(false);
  }
  
  const openNewFoodMoFunc = () => {
    setShowNewFoodModal(true);
  };
  const closeNewFoodMoFunc = () => {
    setShowNewFoodModal(false);
  }

  return (
    <header>
      <nav>
      <button className="nav-addFood-btn" onClick={openNewFoodMoFunc} >Add New Food</button>
      {showNewFoodModal ? <AddFood accessToken={accessToken} closeNewFoodMoFunc={closeNewFoodMoFunc}/> : null}
      {!logedIn ? <button className="login-button" onClick={openloginMoFunc} >Log In</button> : <button>Log Out</button>}
      {showLoginModal ? <LoginPage closeLogModalFunc={closeLogModalFunc} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/> : null}
      </nav>
  </header>
  )
}

export default NavHeader