import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

import data from "../data.json";

import Header from "../Components/Header";
import PickFood from "../Components/PickFoodFL/PickFood";
import ShowPickedGFood from "../Components/ShowPickedGFoods";
import CheckRestaurants from "./CheckRestaurants";

const Home = () => {
  const [searchPrice, setSearchPrice] = useState(1);
  const [searchLocation, setSearchLocation] = useState();
  const [searchRadius, setSearchRadius] = useState(8049);

  const priceChange = (event) => {
    event.preventDefault();
    let newPrice = parseInt(event.target.value)
    setSearchPrice(newPrice);
  };
  console.log("searchPrice", searchPrice);
  const locationChange = (event) => {
    event.preventDefault();
    setSearchLocation(event.target.value);
  };
  console.log("searchLocation", searchLocation);

  const radiusChange = (event) => {
    event.preventDefault();
    let miles = parseInt(event.target.value);
    console.log("miles", miles);
    let meters = Math.round((miles * 5280) / 3.28);
    setSearchRadius(meters);
  };
  console.log("searchRadius", searchRadius);

  ///logic for Selcting food cards
  const [generalFoods, setGeneralFoods] = useState(data);
  const [likedFoods, setLikedFoods] = useState([]);
  const [dislikedFoods, setDislikedFoods] = useState([]);
  let current_food_option = 0;

  const removedPickFood = (generalFoodsSource, displayedGFoodID) =>
    generalFoodsSource.filter(
      (removeFood) => removeFood.id_ !== displayedGFoodID
    );

  const adjustGeneralFoodList = (displayedGFoodID, casePicked) => {
    const newgeneralFoods = [...generalFoods];
    const newLikedFoods = [...likedFoods];
    const newDislikedFoods = [...dislikedFoods];

    switch (casePicked) {
      case "case1SelectFood":
        if (
          !generalFoods[current_food_option].Liked_Foods.includes(
            displayedGFoodID
          )
        ) {
          newgeneralFoods[current_food_option].Liked_Foods.push(
            displayedGFoodID
          );
          newLikedFoods.push(data[displayedGFoodID]);

          setLikedFoods(newLikedFoods);
          setGeneralFoods(removedPickFood(generalFoods, displayedGFoodID));
        }
        break;
      case "case2DontSelectFood":
        if (
          !generalFoods[current_food_option].disLiked_Foods.includes(
            displayedGFoodID
          )
        ) {
          newgeneralFoods[current_food_option].disLiked_Foods.push(
            displayedGFoodID
          );
          newDislikedFoods.push(data[displayedGFoodID]);

          setDislikedFoods(newDislikedFoods);
          setGeneralFoods(removedPickFood(generalFoods, displayedGFoodID));
        }
        break;
      default:
        return generalFoods;
    }
  };
  return (
    <div>
      <Header />
      <div className="main-card-container">
        <Routes>
          {likedFoods.length < 3 ? (
            <Route
              path="/"
              element={
                <PickFood
                  key={generalFoods[0].id_}
                  displayedGFood={generalFoods[0]}
                  adjustGeneralFoodList={adjustGeneralFoodList}
                  priceChange={priceChange}
                  locationChange={locationChange}
                  radiusChange={radiusChange}
                  searchPrice={searchPrice}
                  searchLocation={searchLocation}
                  searchRadius={searchRadius}
                />
              }
            />
          ) : (
            <Route
              path="/"
              element={
                <ShowPickedGFood
                  likedFoods={likedFoods}
                  dislikedFoods={dislikedFoods}
                  priceChange={priceChange}
                  locationChange={locationChange}
                  radiusChange={radiusChange}
                  searchPrice={searchPrice}
                  searchLocation={searchLocation}
                  searchRadius={searchRadius}
                />
              }
            />
          )}

          <Route
            path="/Restaurants/:id"
            element={
              <CheckRestaurants
                likedFoods={likedFoods}
                dislikedFoods={dislikedFoods}
                searchPrice={searchPrice}
                searchLocation={searchLocation}
                searchRadius={searchRadius}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
