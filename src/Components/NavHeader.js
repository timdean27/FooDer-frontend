import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import AddFood from "../Components/Modals/AddFood";
import LoginPage from "./Modals/LoginPage/LoginPage";
import LogOut from "./Modals/LogOut";
import SignUP from "./Modals/SignUP/SignUP";
import EditDeleteFood from "./Modals/EditDeleteFood"
const NavHeader = ({accessToken ,setAccessToken , setUserSignedIn , grabFoodDataFunc ,generalFoods, currentFOODID , userSignedIn}) => {
  const [loginData, setLoginData , ] = useState({
    loginName: '',
    email: '',
    password:"",
  })
  const [showNewFoodModal, setShowNewFoodModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUPModal, setShowSignUPModal] = useState(false)
  const [showEDITDeleteModal , setEDITDeleteModal] = useState(false)
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

  const openEDITDeleteMoFunc = () => {
    setEDITDeleteModal(true);
  };
  const closeEDITDeleteMoFunc = () => {
    setEDITDeleteModal(false);
  }


  return (
    <header>
      <nav>
      <button className="nav-addFood-btn" onClick={openNewFoodMoFunc} >Add New Food</button>
      {showNewFoodModal ? <AddFood accessToken={accessToken} closeNewFoodMoFunc={closeNewFoodMoFunc} grabFoodDataFunc={grabFoodDataFunc} userSignedIn={userSignedIn}/> : null}

      <button className="SignUP-button" onClick={openSignUPMoFunc} >Sign UP</button>
      {showSignUPModal ? <SignUP accessToken={accessToken} closeSignUPMoFunc={closeSignUPMoFunc} setUserSignedIn={setUserSignedIn}/> : null}
      
      <button className="nav-EditDelete-btn" onClick={openEDITDeleteMoFunc} >Edit & Delete Foods</button>
      {showEDITDeleteModal ? <EditDeleteFood accessToken={accessToken} closeEDITDeleteMoFunc={closeEDITDeleteMoFunc} setUserSignedIn={setUserSignedIn} generalFoods={generalFoods} currentFOODID={currentFOODID} grabFoodDataFunc={grabFoodDataFunc}  userSignedIn={userSignedIn}/> : null}

      {!accessToken ? <button className="loginOrOut-button" onClick={openloginMoFunc} >Log In</button> : <LogOut setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/>}
      {showLoginModal ? <LoginPage closeLogModalFunc={closeLogModalFunc} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/> : null}
      </nav>
  </header>
  )
}

export default NavHeader