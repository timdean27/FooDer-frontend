import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';
// import axios from 'axios';
import queryString from 'query-string'

import "./App.css"
import Home from './Pages/Home';

const App = () => {


// const API_BASE_URL = in .env
// const API_KEY = in .env

// // const [term,setTerm] = useState({term: 'Pizza'})
// // const [location,setLocation] = useState({location: 'New York'})
// // const [price,setPrice] = useState({price : 2})

// const [searchCriteria, setSearchCriteria] = useState({term: 'Pizza', location: 'New York', price : 2});
// const [restaurants, setRestaurants] = useState([]);
  

// async function getResturantsData(path,searchCriteria) {
//   const query = queryString.stringify(searchCriteria);
//   await fetch(`${API_BASE_URL}${path}?${query}`, {
//             headers: {
//                 Authorization: `Bearer ${API_KEY}`,
//                 Origin: 'localhost',
//                 withCredentials: true,
//             }
//         }).then((res) => res.json()).then((data) => {

//       console.log('data insisde fetch funciton', data)
      
//        setRestaurants(data)
//     })
//   }

//   useEffect(() => {
//     getResturantsData('/businesses/search',searchCriteria)
//   }, [searchCriteria])


  return (
    <Home/>

  )
}

export default App