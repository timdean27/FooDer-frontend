import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

// import data from "../data.json";

import NavHeader from "../Components/NavHeader";
import PickFood from "../Components/PickFoodFL/PickFood";
import ShowPickedGFood from "../Components/ShowPickedGFood";
import CheckRestaurants from "./CheckRestaurants";



const CheckFoodsHome = ({generalFoods, accessToken ,setAccessToken , setUserSignedIn}) => {
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

///////////////logic for Selcting food cards
  // const [generalFoods, setGeneralFoods] = useState(data);
  const [currentGfoodIndex, setCurrentGfoodIndex] = useState(0);
  const [likedFoods,setLikedFoods] = useState([])
  console.log("generalFoods", generalFoods)


  const nextGfood = () => {
    if (currentGfoodIndex < generalFoods.length) {
      let newcurrentGfoodIndex = currentGfoodIndex + 1;
      setCurrentGfoodIndex(newcurrentGfoodIndex);
    }
  };
  const previousGfood = () => {
    if (currentGfoodIndex != 0) {
      let lastcurrentGfoodIndex = currentGfoodIndex - 1;
      setCurrentGfoodIndex(lastcurrentGfoodIndex);
    }
  };
  const likeGfoods = () => {
    if(!likedFoods.includes(generalFoods[currentGfoodIndex])){
    let addlikeGfood =[...likedFoods]
    console.log("addlikeGfood", addlikeGfood)
    addlikeGfood.push(generalFoods[currentGfoodIndex])
    setLikedFoods(addlikeGfood)
    console.log("likedFoods", likedFoods)
    }
    nextGfood()
  }

  function removeLike(ID){
    console.log("ID", ID)
    console.log("generalFoods[index]", generalFoods)
    console.log("generalFoods[index]", generalFoods)
    let removelikeGfood =[...likedFoods]
    console.log("removelikeGfood", removelikeGfood)
    likedFoods.map((like,i) => {
      console.log("likes",like.id)
      if(like.id == ID){
      let index = removelikeGfood.indexOf(like)
      console.log("index", index)
      if (index > -1) {
        removelikeGfood.splice(index, 1);
      }
      setLikedFoods(removelikeGfood)
    }})
      console.log("likedFoods", likedFoods)
  }

  const resetGfoods = ()=>{
    console.log("reset food running")
    setLikedFoods([])
    setCurrentGfoodIndex(0)
   }

  return (
    <div>
      <NavHeader accessToken={accessToken} setAccessToken={setAccessToken} setUserSignedIn={setUserSignedIn}/>
      
      <div >
        <Routes>
          {(likedFoods.length < 3 && currentGfoodIndex < generalFoods.length)? (
            <Route
              path="/"
              element={
                <PickFood
                  generalFoods={generalFoods}
                  currentGfoodIndex={currentGfoodIndex}
                  removeLike={removeLike}
                  nextGfood= {nextGfood}
                  previousGfood={previousGfood}
                  likeGfoods={likeGfoods}
                  likedFoods={likedFoods}
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
                  priceChange={priceChange}
                  locationChange={locationChange}
                  radiusChange={radiusChange}
                  searchPrice={searchPrice}
                  searchLocation={searchLocation}
                  searchRadius={searchRadius}
                  resetGfoods={resetGfoods}
                />
              }
            />
          )}

          <Route 
            path="/Restaurants/:id"
            element={
              <CheckRestaurants
                likedFoods={likedFoods}
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

export default CheckFoodsHome;