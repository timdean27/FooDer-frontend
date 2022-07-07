import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";

import PickRestaurants from "../Components/PickRestaurants/PickRestaurants";

const CheckRestaurants = ({
  likedFoods,
  dislikedFoods,
  searchPrice,
  searchLocation,
  searchRadius,
}) => {


  const [searchCriteria, setSearchCriteria] = useState({
    term: "",
    location: searchLocation,
    price: searchPrice,
    radius: searchRadius,
  });

  const [FoodSearchForOBJ, setFoodSearchForOBJ] = useState([]);
  const { id } = useParams();


  const FoodSearchfunction = () => {
    likedFoods.map((foodWeWant) => {
      console.log("foodWeWant.id_", foodWeWant.id_);
      if (foodWeWant.id_ == id) {
        setFoodSearchForOBJ(foodWeWant);
      }
    });
  };

  // console.log("FoodSearchForOBJ", FoodSearchForOBJ);
  // console.log("FoodSearchForOBJ", Object.keys(FoodSearchForOBJ).length === 0);
  // console.log("searchCriteria", searchCriteria);

  if (Object.keys(FoodSearchForOBJ).length === 0) {
    FoodSearchfunction();
  }

  const loadedTerm = () => {
    if (searchCriteria.term === "") {
      setSearchCriteria({
        term: FoodSearchForOBJ.name,
        location: searchLocation,
        price: searchPrice,
        radius: searchRadius,
      });
      console.log("searchCriteria", searchCriteria);
    }
  };

  const loading = () => {
    return <h1> loading #1 Failed to load Search criteria</h1>;
  };

  //////////////////////////////////////////////////////API CALL

  //   const API_BASE_URL = process.env.API_BASE_URL
  //   const YELP_API_KEY = process.env.YELP_API_KEY
  // if(process.env.YELP_API_KEY) {
  //     console.log('It is set!');
  // }
  // else {
  //     console.log('No set!');
  // }
  ////////////////////////////////////////////////////////////////
  // const [searchCriteria, setSearchCriteria] = useState({term: 'Pizza', location: 'New York', price : 2 , radius: 8049});



  const [restaurantsDATA, setRestaurantsDATA] = useState([]);

  async function getResturantsData(path, searchCriteria) {
    const searchQuery = queryString.stringify(searchCriteria);
    await fetch(`${API_BASE_URL}${path}?${searchQuery}`, {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
        Origin: "localhost",
        withCredentials: true,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data insisde fetch funciton", data);

        setRestaurantsDATA(data.businesses);
      });
  }

  // useEffect(() => {
  //   getResturantsData('/businesses/search',searchCriteria)
  // }, [searchCriteria])
  ////////////////////////////////////////////////////////////////

  console.log("restaurantsDATA .length", restaurantsDATA.length);
  console.log("restaurantsDATA", restaurantsDATA);
  const makeAPICall = () => {
    console.log("searchCriteria from inside make API CALL", searchCriteria);
    getResturantsData("/businesses/search", searchCriteria);
  };
  if (
    Object.keys(FoodSearchForOBJ).length !== 0 &&
    searchCriteria.term !== "" &&
    restaurantsDATA.length === 0
  ) {
    makeAPICall();
    return (
      <div>
        <h1>Loading #2 Failed API Call</h1>
      </div>
    );
  }
  const callMadeShowCards = () => {
    return (
      <div>
        <PickRestaurants
          FoodSearchForOBJ={FoodSearchForOBJ}
          searchPrice={searchPrice}
          searchLocation={searchLocation}
          searchRadius={searchRadius}
          restaurantsDATA={restaurantsDATA}
        />
      </div>
    );
  };

  //////////////////////////////////////////////////////API CALL

  return (
    <div>
      {Object.keys(FoodSearchForOBJ).length !== 0 ? loadedTerm() : loading()}
      {Object.keys(FoodSearchForOBJ).length !== 0 && searchCriteria.term !== "" && restaurantsDATA.length === 0 ? makeAPICall() : callMadeShowCards()}
    </div>
  );
};

export default CheckRestaurants;
