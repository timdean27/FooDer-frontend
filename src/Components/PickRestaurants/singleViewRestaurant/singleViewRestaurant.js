import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const singleViewRestaurant = ({restaurantID}) => {
  const [searchRestaurantID, setSearchRestaurantID] = useState(restaurantID)
  const [RestaurantsDetail, setRestaurantsDetail]= useState()
  const [RestaurantsReviews, setRestaurantsReviews]= useState()
////////////////////////////////API call For "/businesses/{id}"
  async function getResturantsDetail() {
    const path = `/businesses/${searchRestaurantID}`
    const DetailParamsTOBack = {
      method: "GET",
      url: "http://localhost:3500/apiDetail",
      params: { path },
    };
    await axios
      .request(DetailParamsTOBack)
      .then((res) => {
        console.log("data insisde fetch funciton singleViewRestaurant", res.data);
        setRestaurantsDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
////////////////////////////////API call For "/businesses/{id}/reviews"
async function getResturantsReviews() {
  const path = `/businesses/${searchRestaurantID}/reviews`
  const ReviewParamsTOBack = {
    method: "GET",
    url: "http://localhost:3500/apiReviews",
    params: { path },
  };
  await axios
    .request(ReviewParamsTOBack)
    .then((res) => {
      console.log("data insisde fetch funciton singleViewRestaurant", res.data);
      setRestaurantsReviews(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
  useEffect(() => {
    getResturantsDetail()
    getResturantsReviews()
    }, []);

  return (
    <div>singleViewRestaurant</div>
  )
}

export default singleViewRestaurant