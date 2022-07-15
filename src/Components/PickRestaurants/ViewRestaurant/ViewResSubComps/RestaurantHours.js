import React, { useState, useEffect } from "react";

const RestaurantHours = ({restaurantsDetail}) => {


const findHours = () =>{
 return restaurantsDetail.hours[0].open.map((open,index)=>{
  console.log("open.day" ,open.day)
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const convertTime = (milhours) => {
    let placeholdTime
    let splitTime
    let standardTime =""
    if(milhours <=1159 ){
       placeholdTime = milhours /100
       if(placeholdTime ==0){return standardTime = "12:00am"}
          else if(placeholdTime % 1 == 0){
            return standardTime=placeholdTime.toString()+":00am"
          }
          else if(placeholdTime % 1 !== 0){
            console.log("placeholdTime", placeholdTime)
            splitTime = placeholdTime.toString().split(".")
              if(splitTime[1]<10){
                return standardTime=splitTime[0].toString() + ":" + (splitTime[1]*10).toString()+"am"
              }
              else if(splitTime[1]>10)
              {
                return standardTime=splitTime[0].toString() + ":" + (splitTime[1]*10).toString()+"am"
              }
          }
  }
    else if (milhours >1159 ){
       placeholdTime = (milhours/100)
       if(placeholdTime ==12){return standardTime = "12:00pm"}
          else if(placeholdTime % 1 == 0){
            return standardTime=(placeholdTime-12).toString()+":00pm"
          }
          else if(placeholdTime % 1 !== 0){
            splitTime = placeholdTime.toString().split(".")
              if(splitTime[1]<10){
                return standardTime=(splitTime[0]-12).toString() + ":" + (splitTime[1]*10).toString()+"pm"
              }
              else if(splitTime[1]>10)
              {
                return standardTime=(splitTime[0]-12).toString() + ":" + (splitTime[1]).toString()+"pm"
                }
      }
    }
  }

  convertTime(open.start)
  return (
  <div key={index} className="schedule-container">

    <p>{day[open.day]}</p>
    <p>{convertTime(open.start)}</p>
    <p>{convertTime(open.end)}</p>

  </div>
)})
}


const findingHours =()=> {return(<div>RestaurantsDetail hours Not Available</div>)}


  return (
    <div className="Restaurant-schedule">
    {restaurantsDetail.hours ? ( restaurantsDetail.hours[0].open ? findHours() : findingHours() ) : findingHours()}
    </div>
  )
}

export default RestaurantHours