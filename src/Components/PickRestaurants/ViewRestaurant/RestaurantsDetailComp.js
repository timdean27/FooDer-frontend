import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

import RestaurantHours  from "./ViewResSubComps/RestaurantHours"
import RestaurantAddress from "./ViewResSubComps/RestaurantAddress";


const RestaurantsDetailComp = (restaurantID) => {
  console.log(restaurantID);
  const [restaurantsDetail, setRestaurantsDetail] = useState();
  ////////////////////////////////API call For "/businesses/{id}"
  async function getResturantsDetail() {
    // console.log("getResturantsDetail ran", restaurantID);
    let pathDetail = `/businesses/${restaurantID.restaurantID}`;
    // console.log("getResturantsDetail ran pathDetail", pathDetail);
    const DetailParamsTOBack = {
      method: "GET",
      url: "http://localhost:3500/api/Detail",
      params: { pathDetail },
    };
    await axios
      .request(DetailParamsTOBack)
      .then((res) => {
        console.log(
          "data insisde getResturantsDetail() singleViewRestaurant",
          res.data
        );
        setRestaurantsDetail(res.data);
        console.log("restaurantsDetail", restaurantsDetail);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getResturantsDetail();
  }, [restaurantID]);

  //////////////return JSX
  const loadedDetailData = () => {
    return (
      <div>
        <h1>{restaurantsDetail.name}</h1>
        <div className="RestaurantDetail-images">
          {restaurantsDetail.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="restaurantsDetail.photos"
              className="PickRestaurants-img"
            ></img>
          ))}
        </div>
        <RestaurantHours  restaurantsDetail={restaurantsDetail}/>
        <RestaurantAddress restaurantsDetail={restaurantsDetail}/>
      </div>
    );
  };

  const loadingDetailData = () => {
    <div>Waiting on Restaurant Details</div>;
  };

  return (
    <div>      
    
    <div>{restaurantsDetail ? loadedDetailData() : loadingDetailData()}</div>
    </div>
  );
};

export default RestaurantsDetailComp;
