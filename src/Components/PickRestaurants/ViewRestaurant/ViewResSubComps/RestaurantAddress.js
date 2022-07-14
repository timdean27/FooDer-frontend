import React from 'react'

const RestaurantAddress = ({RestaurantsDetail}) => {

    const findAddress = () =>{
     RestaurantsDetail.location.display_address.map((address, index) => (
        // console.log(address)
       <p key={index}>{address}</p>
    ))}

    const findingAddress = () => {
        <div>Finding address</div>
    }


  return (
    <div>{RestaurantsDetail.location.display_address ? findAddress() : findingAddress()}</div>
  )
}

export default RestaurantAddress