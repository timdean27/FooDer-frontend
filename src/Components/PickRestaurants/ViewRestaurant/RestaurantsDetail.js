import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const RestaurantsDetail = (restaurantID) => {
  console.log(restaurantID);
  const [RestaurantsDetail, setRestaurantsDetail] = useState();
  ////////////////////////////////API call For "/businesses/{id}"
  async function getResturantsDetail() {
    console.log("getResturantsDetail ran", restaurantID);
    let pathDetail = `/businesses/${restaurantID.restaurantID}`;
    console.log("getResturantsDetail ran pathDetail", pathDetail);
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
        console.log("RestaurantsDetail", RestaurantsDetail);
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
        <h1>{RestaurantsDetail.name}</h1>
        <div className="RestaurantDetail-images">
          {RestaurantsDetail.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="RestaurantsDetail.photos"
              className="PickRestaurants-img"
            ></img>
          ))}
        </div>
        <div className="Restaurant-schedule">
          {RestaurantsDetail.hours[0] ?
            RestaurantsDetail.hours[0].open.map((open, index) => (
            <div key={index}>
              <p>{open.day}</p>
              <p>{open.start}</p>
              <p>{open.end}</p>
            </div>
            
          )):<p>Hours not listed</p>}
        </div>
      </div>
    );
  };

  const loadingDetailData = () => {
    <div>Waiting on Restaurant Details</div>;
  };

  return (
    <div>{RestaurantsDetail ? loadedDetailData() : loadingDetailData()}</div>
  );
};

export default RestaurantsDetail;
