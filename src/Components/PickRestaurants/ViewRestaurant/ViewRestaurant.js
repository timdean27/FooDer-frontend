import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const ViewRestaurant = (restaurantID) => {
  console.log(restaurantID);
  const [RestaurantsDetail, setRestaurantsDetail] = useState();
  const [RestaurantsReviews, setRestaurantsReviews] = useState();
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
  ////////////////////////////////API call For "/businesses/{id}/reviews"
  async function getResturantsReviews() {
    console.log("getResturantsReviews ran", restaurantID);
    let pathReviews = `/businesses/${restaurantID.restaurantID}/reviews`;
    console.log("getResturantsReviews ran pathReviews", pathReviews);
    const ReviewParamsTOBack = {
      method: "GET",
      url: "http://localhost:3500/api/Reviews",
      params: { pathReviews },
    };
    await axios
      .request(ReviewParamsTOBack)
      .then((res) => {
        console.log(
          "data insisde getResturantsReviews() singleViewRestaurant",
          res.data
        );
        setRestaurantsReviews(res.data);
        console.log("RestaurantsReviews", RestaurantsReviews);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getResturantsDetail();
    getResturantsReviews();
  }, [restaurantID]);

  //////////////return JSX
  const loadedDetailData = () => {
    return (
      <div>
        <h1>{RestaurantsDetail.name}</h1>
        <div className="View-Restaurant-images">
          {RestaurantsDetail.photos.map((photo) => (
            <img
              src={photo}
              alt="RestaurantsDetail.photos"
              className="PickRestaurants-img"
            ></img>
          ))}
        </div>
      </div>
    );
  };

  const loadingDetailData = () => {
    <div>Waiting on Restaurant Details</div>;
  };

  const loadedReviewsData = () => {
    return (
      <div>
        {RestaurantsReviews.reviews.map((review, index) => (
          <div>
            <p>Reviewer Rating {review.rating}</p>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    );
  };
  const loadingReviewsData = () => {
    <div>Waiting on Restaurant Reviews</div>;
  };

  return (
    <div>
      {RestaurantsDetail ? loadedDetailData() : loadingDetailData()}
      {RestaurantsReviews ? loadedReviewsData() : loadingReviewsData()}
    </div>
  );
};

export default ViewRestaurant;
