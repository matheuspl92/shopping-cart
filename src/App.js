import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
