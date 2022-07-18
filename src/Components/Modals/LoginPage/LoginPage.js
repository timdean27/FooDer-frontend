import React, { useState, useEffect } from "react";
import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";

const LoginPage = ({ closeLogModalFunc, accessToken , setAccessToken , setUserSignedIn }) => {
  const loginEndpoint = "api/token/";

  const [formInfo, setFromInfo] = useState({ username: "", password: "" });
  const [networkErrMsg, setNetworkErrMsg] = useState(null);
  const [clientErrMsg, setClientErrMsg] = useState(null);

  const statusCodeToErr = (responseObj) => {
    setNetworkErrMsg(`Network Error of code: ${responseObj.status}`);
  };

  const clientFormValidation = (formInfo) => {
    const blankFields = Object.entries(formInfo).filter((kv) => kv[1] === "");
    if (blankFields.length > 0) {
      setClientErrMsg(`${blankFields[0][0]} can not be blank`);
      return false;
    }
    setClientErrMsg(null);
    return true;
  };

  const handleChange = (e) => {
    setFromInfo({ ...formInfo, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    // console.log(formInfo)
    e.preventDefault();

    setNetworkErrMsg(null);

    if (!clientFormValidation(formInfo)) {
      return;
    }

    const apiUrl = "http://localhost:8000/";

    fetch(apiUrl + loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          statusCodeToErr(res);
          return Promise.resolve(null);
        }
      })
      .then((data) => {
        if (!data) {
          console.log(`problem with network request: ${networkErrMsg}`);
        } else {
          console.log(data);

        //   setUserSignedIn("fake_user");

          setAccessToken(data.access);
          // add tokens to localstorage here

          localStorage.setItem("access_token", data.access);
          localStorage.setItem("user", "fake_user");
          // redirect here
        }
      });
  };

  return (
    <div className="login-modal">
      <button className="close-log-mod-btn" onClick={closeLogModalFunc}>
        X
      </button>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
        <p>{networkErrMsg}</p>
        <p>{clientErrMsg}</p>
    </div>
  );
};

export default LoginPage;