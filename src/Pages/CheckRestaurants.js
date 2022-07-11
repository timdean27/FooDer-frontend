import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
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
  const [apiError, setapiError] = useState("");
  const { id } = useParams();

  const FoodSearchfunction = () => {
    likedFoods.map((foodWeWant) => {
      // console.log("foodWeWant.id", foodWeWant.id);
      if (foodWeWant.id == id) {
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
      // console.log("searchCriteria", searchCriteria);
    }
  };

  const loading = () => {
    return <h1> loading #1 Failed to load Search criteria</h1>;
  };

  const [restaurantsDATA, setRestaurantsDATA] = useState([]);

  async function getResturantsData() {
    const searchQuery = queryString.stringify(searchCriteria);
    const path = "/businesses/search"
    const ParamsTOBack = {
      method: "GET",
      url: "http://localhost:3500/apiBS",
      params: { searchQuery , path },
    };
    await axios
      .request(ParamsTOBack)
      .then((res) => {
        // console.log("data insisde fetch funciton "/businesses/search" , res.data);
        setRestaurantsDATA(res.data.businesses);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // console.log("restaurantsDATA .length", restaurantsDATA.length);
  //console.log("restaurantsDATA", restaurantsDATA);
  
  
  const makeAPICall = () => {
    // console.log("searchCriteria from inside make API CALL for /business/search", searchCriteria);
    getResturantsData("/businesses/search", searchCriteria);
  };
  if (Object.keys(FoodSearchForOBJ).length !== 0 && searchCriteria.term !== "" && restaurantsDATA.length === 0) {
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
      {Object.keys(FoodSearchForOBJ).length !== 0 &&
      searchCriteria.term !== "" &&
      restaurantsDATA.length === 0
        ? makeAPICall()
        : callMadeShowCards()}
    </div>
  );
};

export default CheckRestaurants;