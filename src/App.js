import React, { useState , useEffect} from 'react'
import { Routes, Route , useParams, useNavigate, Link  } from 'react-router-dom';
// import axios from 'axios';
import queryString from 'query-string'

import "./App.css"
import Home from './Pages/Home';

const App = () => {
  return (
    <Home/>
  )
}

export default App