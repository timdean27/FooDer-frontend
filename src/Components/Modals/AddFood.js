import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";



const AddFood = ({accessToken, userSignedIn}) => {
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
          const url = "http://localhost:8000/gfoods_create_protected/"
          const opts = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(foodFormData)
          }
          fetch(url, opts)
          .then(res => res.json())
          .then(data => console.log(data))
        }
        
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input id="name" type="text" onChange={handleChange}/>
                    <input id="image_url" type="text" onChange={handleChange}/>
                    <button type="submit">Add New Food</button>
                </form>
            </div>
      )
    }


export default AddFood