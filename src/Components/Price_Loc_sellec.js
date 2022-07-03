import React, { useState , useEffect} from 'react'


const Price_Loc_sellec = ({priceChange, locationChange}) => {
   
  return (
    <div className="price-slide-container">
        <div className="DollarLogos">
            <h3>$</h3><h3>$$</h3><h3>$$$</h3><h3>$$$$</h3>
        </div>
    <input type="range" className="form-control-range" id="formControlRange" min="1" max="4"
        onChange={priceChange}
        >
    </input>
    <input type="text" placeholder="Input the location you would like to search"
        onChange={locationChange}
        >
    </input>
    </div>
  )
}

export default Price_Loc_sellec