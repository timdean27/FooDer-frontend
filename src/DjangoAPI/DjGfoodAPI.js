import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import CheckFoodsHome from "../Pages/CheckFoodsHome";
import Home from "../Pages/Home";
import NavHeader from "../Components/NavHeader";

const DjGfoodAPI = () => {
  const [userSignedIn, setUserSignedIn] = useState(
    localStorage.getItem("user")
  );
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );

  console.log("userSignedIn", userSignedIn);
  const [generalFoods, setGeneralFoods] = useState([]);

  const grabFoodDataFunc = () => {
    console.log("grabFoodDataFunc ran")
    const REACT_APP_DATABASE_URL_DJANGO = process.env.REACT_APP_DATABASE_URL_DJANGO;
    const loginEndpoint = "gfoods_view_protected/";
    const headers = {
      headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${accessToken}`,
        },
      }

    axios.get(REACT_APP_DATABASE_URL_DJANGO + loginEndpoint ,headers)
    .then(res => {
      console.log("data insisde DjGfood fetch", res.data);
      setGeneralFoods(res.data);
    })

  };

  useEffect(() => {
    grabFoodDataFunc();
  }, [accessToken]);

  console.log("generalFoods", generalFoods);
  return (
    <div>
      {!accessToken ? (

        <Home
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserSignedIn={setUserSignedIn}
          grabFoodDataFunc={grabFoodDataFunc}
        ></Home>

      
      ) : (
        <div>
        <CheckFoodsHome
          generalFoods={generalFoods}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserSignedIn={setUserSignedIn}
          grabFoodDataFunc={grabFoodDataFunc}
          userSignedIn={userSignedIn}
        />
    
        </div>
      )}
    </div>
  );
};

export default DjGfoodAPI;