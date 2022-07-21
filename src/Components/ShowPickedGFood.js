import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import Price_Loc_sellec from "./PickFoodFL/SubPickFood/Price_Loc_sellec";

const ShowPickedGFood = ({
  likedFoods,
  radiusChange,
  locationChange,
  priceChange,
  searchPrice,
  searchLocation,
  searchRadius,
  resetGfoods,
}) => {
  return (
    <div>
    <button onClick={resetGfoods}>Resest Liked Foods</button>
    <div className="Selected-GFoods-Container">
        <div className="GFoods-Box">
          {likedFoods.map((Gfood, index) => (
            <div key={index} className="single-Gfood">
              <h1>You liked {Gfood.name}</h1>
              <div className="single-Gfood-image">
                <img
                  src={Gfood.image_url}
                  alt={`You Picked ${Gfood.name}`}
                />
              </div>
              {searchLocation && (
                <Link to={`/Restaurants/${Gfood.id}`}>
                  <button className="show-pick-btn">
                    Yummy! Lets see where i can get some {Gfood.name}
                  </button>
                </Link>
              )}
            </div>
          ))}
          {!searchLocation && <div>Please select a location</div>}
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

export default ShowPickedGFood;