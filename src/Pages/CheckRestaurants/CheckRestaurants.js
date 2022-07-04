import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';


const CheckRestaurants = ({likedFoods , dislikedFoods, searchPrice, searchLocation}) => {
  const { id } = useParams()
  console.log("likedFoods" ,likedFoods)
  console.log("dislikedFoods",dislikedFoods)
  let FoodSearchForOBJ = []
  likedFoods.map((foodWeWant) => {
      console.log("foodWeWant.id_", foodWeWant.id_)
      if(foodWeWant.id_ == id) {
        FoodSearchForOBJ.push(foodWeWant)
        console.log("FoodSearchForOBJ", FoodSearchForOBJ)
        return FoodSearchForOBJ
      }
    })
    let FoodSearchName = FoodSearchForOBJ[0].name
    let FoodSearchID = FoodSearchForOBJ[0].id_
    let FoodSearchIMG = FoodSearchForOBJ[0].image
    let encodeFood = encodeURI(FoodSearchName)
    let encodeLocation = encodeURI(searchLocation)

    
  return (
    <div>
      <h1>Running Search for Restaurants that got '{FoodSearchName}' with id {FoodSearchID}</h1>
      <h1>Showing Restaurants in price of {searchPrice}</h1>
      <h1>Showing Restaurants around {searchLocation}</h1>
      
    </div>
  )
}

export default CheckRestaurants