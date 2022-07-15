import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import Price_Loc_sellec from "./PickFoodFL/SubPickFood/Price_Loc_sellec";

const ShowPickedGFood = ({
  likedFoods,
  dislikedFoods,
  radiusChange,
  locationChange,
  priceChange,
  searchPrice,
  searchLocation,
  searchRadius,
}) => {
  return (
    <div>
    <div className="Selected-GFoods-Container">
     
        <div className="GFoods-Box">
          {likedFoods.map((Gfood, index) => (
            <div key={index} className="single-Gfood">
              <h1>You liked {Gfood.name}</h1>
              <h1>{Gfood.id}</h1>
              <div className="single-Gfood-image">
                <img
                  src={`/images/foods/${Gfood.image_url}`}
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
          {dislikedFoods.map((disLikedGfood, index) => (
            <div key={index} className="single-Gfood">
              <h1>You Did NOT Like {disLikedGfood.name}</h1>
              <h1>{disLikedGfood.id}</h1>
              <div className="single-Gfood-image">
                <img
                  src={`/images/foods/${disLikedGfood.image_url}`}
                  alt={`You Picked ${disLikedGfood.name}`}
                />
              </div>
            </div>
          ))}
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
