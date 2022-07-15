import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import Price_Loc_sellec from "./SubPickFood/Price_Loc_sellec";

const PickFood = ({
  generalFoods,
  currentGfoodIndex,
  nextGfood,
  previousGfood,
  likeGfoods,
  likedFoods,
  priceChange,
  locationChange,
  radiusChange,
  searchPrice,
  searchLocation,
  searchRadius,
}) => {
  return (
    <div>
      <div className="LikedFood-Container">
        Foods that we Liked so far
        {likedFoods.map((Gfood, index) => (
          <div key={index} className="LikedFood-innerBox">
            <div className="single-LikedFood-image">
              <img
                src={`/images/foods/${Gfood.image_url}`}
                alt={`You Picked ${Gfood.name}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="displayedGFood">
        <div className="displayedGFood-photo">
          <img
            src={`/images/foods/${generalFoods[currentGfoodIndex].image_url}`}
            alt={generalFoods[currentGfoodIndex].name}
          />
        </div>

        <div className="displayedGFood-description">
          <p className="displayedGFood-name-display">
            {generalFoods[currentGfoodIndex].name}
          </p>
        </div>

        <div className="food-button-box">
          <button
            className="selector-button"
            type="button"
            onClick={previousGfood}
          >
            Show me that last one again
          </button>
          <button
            className="selector-button"
            type="button"
            onClick={likeGfoods}
          >
            Lets add {generalFoods[currentGfoodIndex].name} to the Likes
          </button>
          <button className="selector-button" type="button" onClick={nextGfood}>
            Looks Good,but lets keep looking
          </button>
        </div>
      </div>

      <Price_Loc_sellec
        priceChange={priceChange}
        locationChange={locationChange}
        radiusChange={radiusChange}
        searchPrice={searchPrice}
        searchLocation={searchLocation}
        searchRadius={searchRadius}
      />
    </div>
  );
};

export default PickFood;
