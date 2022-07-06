import React, { useState , useEffect} from 'react'
import TickerSpans from './subComp/TickerSpans'

const Price_Loc_sellec = ({priceChange, locationChange, radiusChange}) => {
  let fish = []
  for (let i = 5; i <= 24 ; i ++){
   fish.push(i)
  }
  const getTicks =() => {
      return(
      fish.map((element,indx) => {
          return(<span className="tick" key={indx}>{element}</span>)
      })
      )
  }

  return (
    <div className="price-slide-container">
        <div className="DollarLogos">
            <h3>$</h3><h3>$$</h3><h3>$$$</h3><h3>$$$$</h3>
        </div>
    <input type="range" className="form-control-range" id="formControlRange" min="1" max="4"
        onChange={priceChange}
        >
    </input>
    <p>Input the range in miles from the search location max 24 miles</p>
    <div className="tick-markers">{getTicks()}</div>
    <input type="range" className="form-control-range" id="formControlRange" min="5" max="24"
    onChange={radiusChange}
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