import React from 'react'

const RestaurantAddress = ({restaurantsDetail}) => {

    
    const findAddress =()=>{
      return restaurantsDetail.location.display_address.map((address, index) =>{
        return (
          <div key={index}>
          <p>{address}</p>
          </div>
    )
      })
    }

    const findingAddress = () => {
        <div>Finding address</div>
    }


  return (
    <div className="Address-container">{restaurantsDetail.location.display_address ? findAddress() : findingAddress()}</div>
  )
}

export default RestaurantAddress