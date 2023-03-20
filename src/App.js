import React from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
