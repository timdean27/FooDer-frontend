import React from 'react'

const RestaurantAddress = ({RestaurantsDetail}) => {

    
    const findAddress =()=>{
      return RestaurantsDetail.location.display_address.map((address, index) =>{
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
    <div>{RestaurantsDetail.location.display_address ? findAddress() : findingAddress()}</div>
  )
}

export default RestaurantAddress