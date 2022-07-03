import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';

const PickFood = ({ displayedGFood, adjustGeneralFoodList }) => {

  return (
    <>
    <div className="displayedGFood">
      <div className="displayedGFood-photo">
        <img src={`/images/foods/${displayedGFood.image}`} alt={displayedGFood.name} />
      </div>

      <div className="displayedGFood-description">
        <p className="displayedGFood-name-display">
          {displayedGFood.name}
        </p>
      </div>
    </div>

    <button
        type="button"
        onClick={() => adjustGeneralFoodList(displayedGFood.id, 'case2DontSelectFood')}
        >
        {displayedGFood.name} Not for me!
    </button>
      <button
      type="button"
      onClick={() => adjustGeneralFoodList(displayedGFood.id, 'case1SelectFood')}
      >
      Looks Good, I'll consider some {displayedGFood.name}
    </button>
  </>
  )
}

export default PickFood