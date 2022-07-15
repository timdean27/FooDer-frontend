import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import Price_Loc_sellec from "./SubPickFood/Price_Loc_sellec";

const PickFood = ({
  displayedGFood,
  adjustGeneralFoodList,
  radiusChange,
  locationChange,
  priceChange,
  searchPrice,
  searchLocation,
  searchRadius,
}) => {
  return (
    <div>
        <div  className="displayedGFood">
          <div className="displayedGFood-photo">
            <img
              src={`/images/foods/${displayedGFood.image_url}`}
              alt={displayedGFood.name}
            />
          </div>

          <div className="displayedGFood-description">
            <p className="displayedGFood-name-display">{displayedGFood.name}</p>
          </div>
        
        <div className="food-button-box" >
          <button
          className="selector-button"
            type="button"
            onClick={() =>
              adjustGeneralFoodList(displayedGFood.id, "case2DontSelectFood")
            }
          >
            {displayedGFood.name} Not for me!
          </button>
          <button
          className="selector-button"
            type="button"
            onClick={() =>
              adjustGeneralFoodList(displayedGFood.id, "case1SelectFood")
            }
          >
            Looks Good, I'll consider some {displayedGFood.name}
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
