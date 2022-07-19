import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import AddFood from "../Components/Modals/AddFood";
import LoginPage from "./Modals/LoginPage/LoginPage";
import LogOut from "./Modals/LogOut";
import SignUP from "./Modals/SignUP/SignUP";
const NavHeader = ({accessToken ,setAccessToken , setUserSignedIn}) => {
  const [loginData, setLoginData , ] = useState({
    loginName: '',
    email: '',
    password:"",
  })
  const [showNewFoodModal, setShowNewFoodModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUPModal, setShowSignUPModal] = useState(false)
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
  const openSignUPMoFunc = () => {
    setShowSignUPModal(true);
  };
  const closeSignUPMoFunc = () => {
    setShowSignUPModal(false);
  }


  return (
    <header>
      <nav>
      <button className="nav-addFood-btn" onClick={openNewFoodMoFunc} >Add New Food</button>
      {showNewFoodModal ? <AddFood accessToken={accessToken} closeNewFoodMoFunc={closeNewFoodMoFunc}/> : null}

      <button className="SignUP-button" onClick={openSignUPMoFunc} >Sign UP</button>
      {showSignUPModal ? <SignUP accessToken={accessToken} closeSignUPMoFunc={closeSignUPMoFunc}/> : null}
      
      

      {!accessToken ? <button className="loginOrOut-button" onClick={openloginMoFunc} >Log In</button> : <LogOut setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/>}
      {showLoginModal ? <LoginPage closeLogModalFunc={closeLogModalFunc} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/> : null}
      </nav>
  </header>
  )
}

export default NavHeader