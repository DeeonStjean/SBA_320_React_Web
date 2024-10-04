import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
    </>
  )
}

export default App
