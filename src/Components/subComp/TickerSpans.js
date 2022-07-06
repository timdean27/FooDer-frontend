import React from 'react'

const TickerSpans = () => {
    let fish = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    const getTicks =() => {
        return(
        fish.map((element,indx) => {
            
            return(<span className="tick">{element}</span>)
        })
        )
    }


  return (
    <div className="tick-markers">{getTicks()}</div>
  )
}

export default TickerSpans