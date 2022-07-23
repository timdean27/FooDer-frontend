import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import NavHeader from "../Components/NavHeader";
const Home = ({accessToken,setAccessToken,setUserSignedIn,userSignedIn}) => {
  return (
    <div className="HomePAGE">
    <NavHeader
    accessToken={accessToken}
    setAccessToken={setAccessToken}
    setUserSignedIn={setUserSignedIn}
    userSignedIn={userSignedIn}
    ></NavHeader>
      <h1 className="Welcome-Header">
        Welcome to Fooder, Dont know what or where to Eat... Login and lets see
        if we can fix that
      </h1>
    </div>
  );
};

export default Home;