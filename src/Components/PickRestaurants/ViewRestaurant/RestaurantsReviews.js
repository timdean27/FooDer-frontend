import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const RestaurantsReviews = (restaurantID) => {
  console.log(restaurantID);
  const [RestaurantsReviews, setRestaurantsReviews] = useState();

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
    getResturantsReviews();
  }, [restaurantID]);

  //////////////return JSX

  const loadedReviewsData = () => {
    return (
      <div>
        {RestaurantsReviews.reviews.map((review, index) => (
          <div key={index}>
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
    <div>{RestaurantsReviews ? loadedReviewsData() : loadingReviewsData()}</div>
  );
};

export default RestaurantsReviews;
