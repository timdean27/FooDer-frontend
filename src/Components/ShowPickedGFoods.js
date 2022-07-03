import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';



const ShowPickedGFood = ({likedFoods , dislikedFoods}) => {
  return (
    <div className="Selected-GFoods-Container">

    <div className="GFoods-Box">
      {likedFoods.map((Gfood,index) => (
        <div key={index} className="single-Gfood">
            <h1>You liked {Gfood.name}</h1>
            <h1>{Gfood.id}</h1>
          <div className= "single-Gfood-image">
            <img
              src={`/images/foods/${Gfood.image}`}
              alt={`You Picked ${Gfood.name}`}
            />
          </div>
          <Link  to={`/Restaurants/${Gfood.id}`}>
          <button>Yummy! Lets see where i can get some {Gfood.name}</button>
        </Link>
        
        </div>
      ))}
      
      {dislikedFoods.map((disLikedGfood,index) => (
        <div key={index} className= "single-Gfood">
            <h1>You Did NOT Like {disLikedGfood.name}</h1>
            <h1>{disLikedGfood.id}</h1>
          <div className= "single-Gfood-image">
            <img
              src={`/images/foods/${disLikedGfood.image}`}
              alt={`You Picked ${disLikedGfood.name}`}
            />
          </div>
      </div>
      ))}

      
    </div>
    
   
  </div>
  )
}

export default ShowPickedGFood