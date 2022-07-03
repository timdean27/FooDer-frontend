import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';

const Price_Loc_sellec = () => {
  return (
    <div>
    <input type="range" class="form-range" min="1" max="4" id="customRange2"></input>
    </div>
  )
}

export default Price_Loc_sellec