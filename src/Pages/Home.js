import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';

import data from '../data.json'

import Header from '../Components/Header'
import PickFood from '../Components/PickFood'
import ShowPickedGFood from '../Components/ShowPickedGFoods'
import CheckRestaurants from './CheckRestaurants/CheckRestaurants';
import Price_Loc_sellec from '../Components/Price_Loc_sellec'


const Home = () => {
  const [searchPrice, setSearchPrice] = useState()
  const [searchLocation, setSearchLocation] = useState()

  const [generalFoods, setGeneralFoods] = useState(data);
  const [likedFoods, setLikedFoods] = useState([]);
  const [dislikedFoods, setDislikedFoods] = useState([]);
  let current_food_option = 0

  const removedPickFood = (generalFoodsSource, displayedGFoodID) =>
    generalFoodsSource.filter(removeFood => removeFood.id !== displayedGFoodID);

  const adjustGeneralFoodList = (displayedGFoodID, action) => {
    const newgeneralFoods = [...generalFoods];
    const newLikedFoods = [...likedFoods];
    const newDislikedFoods = [...dislikedFoods];

    switch (action) {
      case 'case1SelectFood':
        if (!generalFoods[current_food_option].Liked_Foods.includes(displayedGFoodID)) {
          newgeneralFoods[current_food_option].Liked_Foods.push(displayedGFoodID);
          newLikedFoods.push(data[displayedGFoodID]);

          setLikedFoods(newLikedFoods);
          setGeneralFoods(removedPickFood(generalFoods, displayedGFoodID));
        }
        break;
      case 'case2DontSelectFood':
        if (!generalFoods[current_food_option].disLiked_Foods.includes(displayedGFoodID)) {
          newgeneralFoods[current_food_option].disLiked_Foods.push(displayedGFoodID);
          newDislikedFoods.push(data[displayedGFoodID]);

          setDislikedFoods(newDislikedFoods);
          setGeneralFoods(removedPickFood(generalFoods, displayedGFoodID));
        }
        break;
      default:
        return generalFoods;
    }
};
  return (
    <div>
    <Header />
          <div className="main-card-container">
          <Routes>
          {(likedFoods.length < 3)?
              
            <Route 
            path='/'
              element ={
                      <PickFood
                      key={generalFoods[0].id}
                      displayedGFood={generalFoods[0]}
                      adjustGeneralFoodList={adjustGeneralFoodList}
                    />
                    }
              />
              
            :
            <Route 
            path='/'
            element ={
                      <ShowPickedGFood
                        likedFoods={likedFoods}
                        dislikedFoods ={dislikedFoods}/>
                    }
              />
          }
         
            <Route 
                path='/Restaurants/:id'
                element = {<CheckRestaurants  
                  likedFoods={likedFoods}
                  dislikedFoods ={dislikedFoods}/>}
            />
          </Routes>
          <Price_Loc_sellec/>
          </div>
    </div>
    
  )
}

export default Home