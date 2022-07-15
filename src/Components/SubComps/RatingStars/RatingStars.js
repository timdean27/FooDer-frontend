import React, { useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
const RatingStars = ({ yelpRating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < yelpRating) {
      stars.push(<BsStarFill color={"Blue"} key={i} />);
    } else {
      stars.push(<BsStar color={"Blue"} key={i} />);
    }
  }

  return (
    <div>
      {stars.map((stars) => {
        return stars;
      })}
    </div>
  );
};

export default RatingStars;
