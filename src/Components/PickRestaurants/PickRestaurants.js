import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import ViewRestaurant from "./ViewRestaurant/ViewRestaurant";

const PickRestaurants = ({
  FoodSearchForOBJ,
  searchPrice,
  searchLocation,
  searchRadius,
  restaurantsDATA,
}) => {
  const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);

  console.log("restaurantsDATA inside PickRestaurants Page", restaurantsDATA);
  // console.log("FoodSearchForOBJ inside PickRestaurants Page", FoodSearchForOBJ);

  const nextRestaurant = () => {
    if (currentRestaurantIndex < restaurantsDATA.length) {
      let newcurrentRestaurantIndex = currentRestaurantIndex + 1;
      setCurrentRestaurantIndex(newcurrentRestaurantIndex);
    }
  };
  const previousRestaurant = () => {
    if (currentRestaurantIndex != 0) {
      let lastcurrentRestaurantIndex = currentRestaurantIndex - 1;
      setCurrentRestaurantIndex(lastcurrentRestaurantIndex);
    }
  };

  return (
    <div>
      <Link to={`/`}>
        <button>Back to Food Options</button>
      </Link>

      <div className="PickRestaurants-mainCard">
        <h1>From PickRestaurants</h1>
        <p>Running Search for Restaurants with '{FoodSearchForOBJ.name}'</p>
        <h2>
          currentRestaurantIndex = {currentRestaurantIndex}{" "}
          (restaurantsDATA.length -1) = {restaurantsDATA.length - 1}
        </h2>
        <h2>RestaurantID={restaurantsDATA[currentRestaurantIndex].id}</h2>
        <h1>{restaurantsDATA[currentRestaurantIndex].name}</h1>
        <img
          src={restaurantsDATA[currentRestaurantIndex].image_url}
          alt={restaurantsDATA[currentRestaurantIndex].name}
          className="PickRestaurants-img"
        ></img>


        <ViewRestaurant
          restaurantID={restaurantsDATA[currentRestaurantIndex].id}
        />

        
      </div>
      <p>Restaurant price {restaurantsDATA[currentRestaurantIndex].price}</p>
      <p>Restaurant Rating {restaurantsDATA[currentRestaurantIndex].rating}</p>
      <p>
        Restaurant Review Count{" "}
        {restaurantsDATA[currentRestaurantIndex].review_count}
      </p>
      <p>
        Restaurant Address{" "}
        {restaurantsDATA[currentRestaurantIndex].location.display_address}
      </p>
      <p>Restaurants Phone # {restaurantsDATA[currentRestaurantIndex].phone}</p>
      <p>
        Restaurant around{" "}
        {Math.round(restaurantsDATA[currentRestaurantIndex].distance)} meters or{" "}
        {Math.round(
          (restaurantsDATA[currentRestaurantIndex].distance / 5280) * 3.28
        )}{" "}
        miles from {searchLocation}
      </p>
      <button onClick={previousRestaurant}>Previous Restaurant</button>
      <button onClick={nextRestaurant}>Next Restaurant</button>
    </div>
  );
};

export default PickRestaurants;
