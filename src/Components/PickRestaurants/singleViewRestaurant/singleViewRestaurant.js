import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const SingleViewRestaurant = ({restaurantID}) => {
  const [searchRestaurantID, setSearchRestaurantID] = useState(restaurantID)
  console.log("singleViewRestaurant", "searchRestaurantID", searchRestaurantID)
  const [RestaurantsDetail, setRestaurantsDetail]= useState()
  const [RestaurantsReviews, setRestaurantsReviews]= useState()
////////////////////////////////API call For "/businesses/{id}"
  async function getResturantsDetail() {
    const pathDetail = `/businesses/${searchRestaurantID}`
    const DetailParamsTOBack = {
      method: "GET",
      url: "http://localhost:3500/api/Detail",
      params: { pathDetail },
    };
    await axios
      .request(DetailParamsTOBack)
      .then((res) => {
        // console.log("data insisde getResturantsDetail() singleViewRestaurant", res.data);
        setRestaurantsDetail(res.data);
        console.log("RestaurantsDetail",RestaurantsDetail);
      })
      .catch((error) => {
        console.log(error);
      });
  }
////////////////////////////////API call For "/businesses/{id}/reviews"
async function getResturantsReviews() {
  const pathReviews = `/businesses/${searchRestaurantID}/reviews`
  const ReviewParamsTOBack = {
    method: "GET",
    url: "http://localhost:3500/api/Reviews",
    params: { pathReviews },
  };
  await axios
    .request(ReviewParamsTOBack)
    .then((res) => {
      // console.log("data insisde getResturantsReviews() singleViewRestaurant", res.data);
      setRestaurantsReviews(res.data);
      console.log("RestaurantsReviews",RestaurantsReviews);
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

export default SingleViewRestaurant