import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import Home from "../Pages/Home";


const DjGfoodAPI = () => {
  const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'))
    // const [gfoodData, setGfoodData] = useState([])
    const [generalFoods, setGeneralFoods] = useState([]);
    useEffect(() => {
        // const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MTY2NTgyLCJpYXQiOjE2NTgxNjYyODIsImp0aSI6ImE5MTAxZDhkM2UzYTQyMDQ4NzBkNDVhMmVkNjA5MDhiIiwidXNlcl9pZCI6MX0.eGnh9IAL1E7XBQcBqFDpyFkAlPOl-RVWY6IkjwBsw7U"
        const url = "http://localhost:8000/gfoods_view_protected/"
        const opts = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
    
        }
        fetch(url, opts)
        .then(res => res.json())
        .then((data) => {
          console.log('data insisde DjGfood fetch', data)
    
          setGeneralFoods(data)
        }).catch(console.error);
      }, [])

  return (
    <div>
    <Home generalFoods={generalFoods} accessToken={accessToken} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/>
    
    </div>
  )
}

export default DjGfoodAPI