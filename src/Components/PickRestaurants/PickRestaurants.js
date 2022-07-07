import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const PickRestaurants = ({
  FoodSearchForOBJ,
  searchPrice,
  searchLocation,
  searchRadius,
  restaurantsDATA,
}) => {

const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0)
const [singleViewRestuarant , setSingleViewRestuarant] = useState()

  console.log("restaurantsDATA inside PickRestaurants Page", restaurantsDATA);
  console.log("FoodSearchForOBJ inside PickRestaurants Page", FoodSearchForOBJ);

  
const nextRestaurant =() => {
let newcurrentRestaurantIndex = (currentRestaurantIndex +1)
setCurrentRestaurantIndex(newcurrentRestaurantIndex)
}


  return (
    <div>
    <button>Back to Food Options</button>
    <div className="PickRestaurants-mainCard">
      <h1>From PickRestaurants</h1>
      <p>Running Search for Restaurants that got '{FoodSearchForOBJ.name}'</p>
      <h1>{restaurantsDATA[currentRestaurantIndex].name}</h1>
      <img src={restaurantsDATA[currentRestaurantIndex].image_url} alt={restaurantsDATA[currentRestaurantIndex].name} className="PickRestaurants-img"></img>
      <Link to={`/`}>
        
      </Link>
      </div>
      <p>Showing Restaurants in price of {searchPrice}</p>
      <p>Showing Restaurants around {searchLocation}</p>
      <p>
        Showing Restaurants around {searchRadius} or{" "}
        {(searchRadius / 5280) * 3.28} miles
      </p>
      <button onClick={nextRestaurant}>Next Restaurant</button>
    
    </div>
  );
};

export default PickRestaurants;
