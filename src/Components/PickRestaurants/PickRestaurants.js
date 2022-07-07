import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const PickRestaurants = ({
  FoodSearchForOBJ,
  searchPrice,
  searchLocation,
  searchRadius,
  restaurantsDATA,
}) => {

    
  console.log("restaurantsDATA inside PickRestaurants Page", restaurantsDATA);

  return (
    <div>
      <h1>From PickRestaurants</h1>
      <h1>WE have Data!!!! and here is the proof {restaurantsDATA[0].name}</h1>
      <Link to={`/`}>
        <button>Back to Food Options</button>
      </Link>
      <h2>Running Search for Restaurants that got '{FoodSearchForOBJ.name}'</h2>
      <h2>Showing Restaurants in price of {searchPrice}</h2>
      <h2>Showing Restaurants around {searchLocation}</h2>
      <h2>
        Showing Restaurants around {searchRadius} or{" "}
        {(searchRadius / 5280) * 3.28} miles
      </h2>
    </div>
  );
};

export default PickRestaurants;
