import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';


const CheckRestaurants = ({likedFoods , dislikedFoods}) => {
  const { id } = useParams()
  console.log("likedFoods" ,likedFoods)
  console.log("dislikedFoods",dislikedFoods)
  let FoodSearchForOBJ = []
  likedFoods.map((foodWeWant) => {
      console.log("foodWeWant.id", foodWeWant.id)
      if(foodWeWant.id == id) {
        FoodSearchForOBJ.push(foodWeWant)
        console.log("FoodSearchForOBJ", FoodSearchForOBJ)
        return FoodSearchForOBJ
      }
    })
    let FoodSearchName = FoodSearchForOBJ[0].name
    let FoodSearchID = FoodSearchForOBJ[0].id
    let FoodSearchIMG = FoodSearchForOBJ[0].image

  return (
    <div>
      <h1>Running Search for Restaurants that got '{FoodSearchName}'</h1>
    </div>
  )
}

export default CheckRestaurants