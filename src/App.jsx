//import { useState } from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Main from "./pages/Main.jsx";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </div>
    </>
  );
}