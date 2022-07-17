import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import Home from "../Pages/Home";

const DjGfoodAPI = () => {
    const [userSignedIn, setUserSignedIn] = useState(localStorage.getItem('user'))
    // const [gfoodData, setGfoodData] = useState([])
    const [generalFoods, setGeneralFoods] = useState([]);
    useEffect(() => {
        const accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4MDIyMjc4LCJpYXQiOjE2NTgwMjE5NzgsImp0aSI6ImQ2MTU4ZWQwYzA1ZjQ2Zjk5YmUwOWQwMDM3ZGZiOGYwIiwidXNlcl9pZCI6MX0.jlBhFodkv06vUUm66Rgz2pDM4ciOQhPbOY8kFe1n9eU"
        const url = "http://localhost:8000/gfoods_protected/"
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
    <Home generalFoods={generalFoods}/>
  )
}

export default DjGfoodAPI