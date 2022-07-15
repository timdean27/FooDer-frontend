import React, { useState, useEffect } from "react";

const RestaurantHours = ({RestaurantsDetail}) => {


const findHours = () =>{
 return RestaurantsDetail.hours[0].open.map((open,index)=>{
  console.log("open.day" ,open.day)
  let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
  return (
  <div key={index} className="schedule-container">

    <p>{day[open.day]}</p>
    <p>{open.start >=12 ? `${open.start}am` : `${open.start}pm`}</p>
    <p>{open.end <12 ? `${open.end}am` : `${open.end}pm`}</p>

  </div>
)})
}


const findingHours =()=> {return(<div>RestaurantsDetail hours Not Available</div>)}


  return (
    <div className="Restaurant-schedule">
    {RestaurantsDetail.hours[0].open ? findHours() : findingHours()}
    </div>
  )
}

export default RestaurantHours