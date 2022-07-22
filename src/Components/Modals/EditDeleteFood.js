import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";


const EditDeleteFood = ({accessToken,closeEDITDeleteMoFunc, grabFoodDataFunc , generalFoods ,currentFOODID , userSignedIn}) => {
  const [foodFormData, setfoodFormData] = useState({
    name: '',
    image_url: '',
    user_string: userSignedIn ? userSignedIn : "unknown"
  })



  // console.log(generalFoods)
  //   console.log("current food id", currentFOODID)
        const DeleteFoodAxFunc = (event) => {
          console.log("current food id inside ", currentFOODID)
          console.log(generalFoods)
            event.preventDefault()
            const REACT_APP_DATABASE_URL_DJANGO = process.env.REACT_APP_DATABASE_URL_DJANGO;
            console.log("current food id line 22", currentFOODID)
            const loginEndpoint = `gfoods_delete_protected/${currentFOODID}/`;
            console.log("loginEndpoint", loginEndpoint)
            const headers = {
              headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${accessToken}`,
                },
              }
        axios.delete(REACT_APP_DATABASE_URL_DJANGO + loginEndpoint ,headers)
          // .then(closeEDITDeleteMoFunc())
          .then(grabFoodDataFunc())
        }





          const handleChange = (e) => {
              setfoodFormData({...foodFormData, [e.target.id]: e.target.value})
          }
          const handleSubmit = (e) => {
            e.preventDefault()
            const REACT_APP_DATABASE_URL_DJANGO = process.env.REACT_APP_DATABASE_URL_DJANGO;
            const loginEndpoint = `gfoods_update_protected/${currentFOODID}/`;
            const headers = {
              headers: {
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${accessToken}`,
                },
              }
            axios.put(REACT_APP_DATABASE_URL_DJANGO + loginEndpoint ,foodFormData,headers)
            .then(closeEDITDeleteMoFunc())
            .then(grabFoodDataFunc())
          }
          
          let currentFOOD = ""
          generalFoods.map(food => {
            if(food.id == currentFOODID){
              currentFOOD = food
            }
          })
        
        return (
            <div className="editDelete-modal">
            <button className="close-log-mod-btn" onClick={closeEDITDeleteMoFunc}>
              X
            </button>
            <button onClick={DeleteFoodAxFunc} className="DeleteFoodPG-btn" type="submit">Delete {currentFOOD.name}</button>

                    <form onSubmit={handleSubmit}>
                    <input id="name" type="text" placeholder={currentFOOD.name} onChange={handleChange}/>
                    <input id="image_url" type="text" placeholder="image url" onChange={handleChange}/>
                    <button className="addFoodPG-btn" type="submit">Edit Food</button>
                </form>
            </div>
      )
    }


export default EditDeleteFood