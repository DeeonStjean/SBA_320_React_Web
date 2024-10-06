//import { useState } from 'react'
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Main from "./pages/Main.jsx";
import Todo from "./pages/Todo.jsx";
import Signup from "./pages/Signup.jsx";

export default function App () {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/todo" element={<Todo/>}/>
        </Routes>
      </div>
    </>
  );
}