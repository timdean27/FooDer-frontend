import React, { useState, useEffect } from "react";

const RestaurantHours = ({RestaurantsDetail}) => {
const [schedule ,setSchedule] = useState({})

const findHours = () =>{
 RestaurantsDetail.hours.map((findHours, i) =>
  {
    console.log(typeof(findHours.open))
      if(Object.keys(schedule).length == 0){
      setSchedule(findHours.open)
      console.log("setschedule in if ran" ,schedule)
      }
  }
)}

const loadedSchedule =()=>{
  console.log("loadedSchedule" ,schedule)
  schedule.map((open,index)=>{
    console.log("open.day" ,open.day)
    return (
      <div key={index}>
      <p>{open.day}</p>
      <p>{open.start}</p>
      <p>{open.end}</p>
    </div>
)
  })
}

const findingHours =()=> {return(<div>RestaurantsDetail not loaded</div>)}
const loadingSchedule =()=> {return(<div>Hours Not Available</div>)}

  return (
    <div className="Restaurant-schedule">
    {RestaurantsDetail.hours ? findHours() : findingHours()}
    {Object.keys(schedule).length !== 0 ? loadedSchedule() : loadingSchedule()}
    </div>
  )
}

export default RestaurantHours