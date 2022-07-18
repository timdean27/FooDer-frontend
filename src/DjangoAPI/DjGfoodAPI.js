import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import Home from "../Pages/Home";


const DjGfoodAPI = () => {
    const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))
    const [accessToken, setAccessToken] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MTA4MTM0LCJpYXQiOjE2NTgxMDc4MzQsImp0aSI6IjVkY2VhYjdhYzMxNjQwMTJhODU0ZTY3YWM3YjMzODc4IiwidXNlcl9pZCI6MX0.ifqG3ZE4A5ZiGALYUcddgXw8o8mJKrLf_klpIea3dvw")
    // const [gfoodData, setGfoodData] = useState([])
    const [generalFoods, setGeneralFoods] = useState([]);
    useEffect(() => {
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
    <Home generalFoods={generalFoods} accessToken={accessToken}/>
    
    </div>
  )
}

export default DjGfoodAPI