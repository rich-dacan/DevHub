import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes }       from "react-router-dom";
import Home     from "../pages/Home";
import Login    from "../pages/Login";
import Signup from '../pages/Signup';

export const Routers = () => {
  const [ authenticated, setAuthenticated ] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@KenzieHub: token'));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated])

  return (
    <>
      <Routes>

        <Route path="/" 
          element={<Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />}
        >
        </Route>

        <Route path="/home/:name" 
          element={<Home 
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />}
        >
        </Route>

        <Route path="/signup" 
          element={<Signup
            authenticated={authenticated}
          />}>  
        </Route>

      </Routes>
    </>
  )
}
