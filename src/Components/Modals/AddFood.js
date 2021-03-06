import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";


const AddFood = ({accessToken, userSignedIn , closeNewFoodMoFunc, grabFoodDataFunc}) => {
      const [foodFormData, setfoodFormData] = useState({
        name: '',
        image_url: '',
        user_string: userSignedIn ? userSignedIn : "unknown"
      })
      
        const handleChange = (e) => {
            setfoodFormData({...foodFormData, [e.target.id]: e.target.value})
        }
    
        const handleSubmit = (e) => {
          e.preventDefault()
          const REACT_APP_DATABASE_URL_DJANGO = process.env.REACT_APP_DATABASE_URL_DJANGO;
          const loginEndpoint = "gfoods_create_protected/";
          const headers = {
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accessToken}`,
              },
            }
          axios.post(REACT_APP_DATABASE_URL_DJANGO + loginEndpoint ,foodFormData,headers)
          .then(closeNewFoodMoFunc())
          .then(grabFoodDataFunc())
          
        }
        
        return (
            <div className="newFood-modal">
            <button className="close-log-mod-btn" onClick={closeNewFoodMoFunc}>
              X
            </button>
                <form onSubmit={handleSubmit}>
                    <input id="name" type="text" placeholder="Name" onChange={handleChange}/>
                    <input id="image_url" type="text" placeholder="image url" onChange={handleChange}/>
                    <button className="addFoodPG-btn" type="submit">Add New Food</button>
                </form>
            </div>
      )
    }


export default AddFood