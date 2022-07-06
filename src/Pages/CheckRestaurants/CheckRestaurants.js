import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";

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
  // console.log("likedFoods" ,likedFoods)
  // console.log("searchPrice" ,searchPrice)
  // console.log("searchLocation" ,searchLocation)
  // console.log("searchRadius" ,searchRadius)
  // console.log("dislikedFoods",dislikedFoods)

  const FoodSearchfunction = () => {
    likedFoods.map((foodWeWant) => {
      console.log("foodWeWant.id_", foodWeWant.id_);
      if (foodWeWant.id_ == id) {
        // console.log("THE foodWeWant",foodWeWant)
        setFoodSearchForOBJ(foodWeWant);
      }
    });
  };
  console.log("FoodSearchForOBJ", FoodSearchForOBJ);
  console.log("FoodSearchForOBJ", Object.keys(FoodSearchForOBJ).length === 0);
  console.log("searchCriteria", searchCriteria);

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
    return (
      <div>
        <h1>
          Running Search for Restaurants that got '{FoodSearchForOBJ.name}'
        </h1>
        <h1>Showing Restaurants in price of {searchPrice}</h1>
        <h1>Showing Restaurants around {searchLocation}</h1>
        <h1>Showing Restaurants around {searchRadius} or { Math.round((searchRadius / 5280)*3.28)} miles</h1>
      </div>
    );
  };

  const loading = () => {
    return <h1> loading</h1>;
  };

  //////////////////////////////////////////////////////API CALL

  // const API_BASE_URL = process.env.API_BASE_URL
  // const YELP_API_KEY = process.env.YELP_API_KEY

  ////////////////////////////////////////////////////////////////

  // const [searchCriteria, setSearchCriteria] = useState({term: 'Pizza', location: 'New York', price : 2 , radius: 8049});
  // const [restaurantsDATA, setRestaurantsDATA] = useState([]);

  // async function getResturantsData(path,searchCriteria) {
  //   const searchQuery = queryString.stringify(searchCriteria);
  //   await fetch(`${API_BASE_URL}${path}?${searchQuery}`, {
  //             headers: {
  //                 Authorization: `Bearer ${YELP_API_KEY}`,
  //                 Origin: 'localhost',
  //                 withCredentials: true,
  //             }
  //         }).then((res) => res.json()).then((data) => {

  //       console.log('data insisde fetch funciton', data)

  //        setRestaurantsDATA(data)
  //     })
  //   }

  // useEffect(() => {
  //   getResturantsData('/businesses/search',searchCriteria)
  // }, [searchCriteria])
  ////////////////////////////////////////////////////////////////

  // const makeAPICall = () =>{
  //   console.log("searchCriteria from inside make API CALL",searchCriteria )
  //     getResturantsData('/businesses/search',searchCriteria)
  // }
  //////////////////////////////////////////////////////API CALL

  return (
    <div>
      {Object.keys(FoodSearchForOBJ).length !== 0 ? loadedTerm() : loading()}
    </div>
  );
};

export default CheckRestaurants;
