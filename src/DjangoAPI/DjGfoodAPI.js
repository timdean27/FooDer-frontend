import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import CheckFoodsHome from "../Pages/CheckFoodsHome";
import Home from "../Pages/Home";

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
    // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MTY2NTgyLCJpYXQiOjE2NTgxNjYyODIsImp0aSI6ImE5MTAxZDhkM2UzYTQyMDQ4NzBkNDVhMmVkNjA5MDhiIiwidXNlcl9pZCI6MX0.eGnh9IAL1E7XBQcBqFDpyFkAlPOl-RVWY6IkjwBsw7U"
    const url = "http://localhost:8000/gfoods_view_protected/";
    const opts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    fetch(url, opts)
      .then((res) => res.json())
      .then((data) => {
        console.log("data insisde DjGfood fetch", data);

        setGeneralFoods(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    grabFoodDataFunc();
  }, [accessToken]);

  console.log("generalFoods", generalFoods);
  return (
    <div>
      {generalFoods.code ? (
        <Home
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserSignedIn={setUserSignedIn}
        ></Home>
      ) : (
        <CheckFoodsHome
          generalFoods={generalFoods}
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserSignedIn={setUserSignedIn}
        />
      )}
    </div>
  );
};

export default DjGfoodAPI;
