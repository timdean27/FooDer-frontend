import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const SignUP = ({closeSignUPMoFunc}) => {
  const [formInfo, setFromInfo] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setFromInfo({ ...formInfo, [e.target.id]: e.target.value });
  };

const handleSubmit =() => {}

  return (
    <div className="login-modal">
    <button className="close-log-mod-btn" onClick={closeSignUPMoFunc}>
      X
    </button>
    <form onSubmit={handleSubmit}>
      <label>username:</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={handleChange}
      />
      <label>password:</label>
      <input
        id="password"
        name="username"
        type="text"
        onChange={handleChange}
      />
      <button className="login-btn" type="submit">
        Login
      </button>
    </form>
  </div>
  )
}

export default SignUP