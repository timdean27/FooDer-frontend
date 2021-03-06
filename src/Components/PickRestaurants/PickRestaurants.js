import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import RestaurantsDetailComp from "./ViewRestaurant/RestaurantsDetailComp";
import RestaurantsReviews from "./ViewRestaurant/RestaurantsReviews";

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
      <h4>
        Showing {currentRestaurantIndex +1} of {restaurantsDATA.length} Restaurants with '{FoodSearchForOBJ.name}'
      </h4>
      <div className="PickRestaurants-mainCard">
        <RestaurantsDetailComp
          restaurantID={restaurantsDATA[currentRestaurantIndex].id}
        />
        <div className="rest-button-box">
          <button className="selector-button" onClick={previousRestaurant}>Previous Restaurant</button>
          <button className="selector-button" onClick={nextRestaurant}>Next Restaurant</button>
        </div>
      </div>

      <div className="reviewsNdets-container">
      <div className="review-rating-container">
          <h4>
            Restaurant Rating: {restaurantsDATA[currentRestaurantIndex].rating}
          </h4>
          <h4>
            Restaurant Review Count:{" "}
            {restaurantsDATA[currentRestaurantIndex].review_count}
          </h4>
        <RestaurantsReviews
          restaurantID={restaurantsDATA[currentRestaurantIndex].id}
        />
      </div>
        <div className="restaurantsDATA-container">
          <p>
            Restaurant price {restaurantsDATA[currentRestaurantIndex].price}
          </p>
          <p>
            Restaurants Phone # {restaurantsDATA[currentRestaurantIndex].phone}
          </p>
          <p>
            Restaurant around{" "}
            {Math.round(
              (restaurantsDATA[currentRestaurantIndex].distance / 5280) * 3.28
            )}{" "}
            miles from {searchLocation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PickRestaurants;

