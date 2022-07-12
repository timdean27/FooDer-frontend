import React, { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const Price_Loc_sellec = ({
  priceChange,
  locationChange,
  radiusChange,
  searchPrice,
  searchLocation,
  searchRadius,
}) => {
  let tickAry = [];
  for (let i = 5; i <= 24; i++) {
    tickAry.push(i);
  }
  const getTicks = () => {
    return tickAry.map((element, indx) => {
      return (
        <span className="tick" key={indx}>
          {element}
        </span>
      );
    });
  };

  return (
    <div className="price-range-Loc-container">
      <div className="price-range-slides">
        <div className="DollarLogos">
          <h3>
            <BsCurrencyDollar />
          </h3>
          <h3>
            <BsCurrencyDollar />
            <BsCurrencyDollar />
          </h3>
          <h3>
            <BsCurrencyDollar />
            <BsCurrencyDollar />
            <BsCurrencyDollar />
          </h3>
          <h3>
            <BsCurrencyDollar />
            <BsCurrencyDollar />
            <BsCurrencyDollar />
            <BsCurrencyDollar />
          </h3>
        </div>
        <input
          type="range"
          className="form-control-range"
          id="formControlRange"
          min="1"
          max="4"
          value={searchPrice ? searchPrice : 1}
          onChange={priceChange}
        ></input>
        <p>Input the range in miles from the search location max 24 miles</p>
        <div className="tick-markers">{getTicks()}</div>
        <input
          type="range"
          className="form-control-range"
          id="formControlRange"
          min="5"
          max="24"
          value={searchRadius == 8049 ? 5 : (searchRadius / 5280) * 3.28}
          onChange={radiusChange}
        ></input>
      </div>
      <div className="location-input">
      <input
        type="text"
        placeholder={
          searchLocation
            ? searchLocation
            : "Input the location you would like to search"
        }
        onChange={locationChange}
      ></input>
      </div>
    </div>
  );
};

export default Price_Loc_sellec;
