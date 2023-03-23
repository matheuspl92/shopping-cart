import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  const { cart, setCart } = useState([]);

  const addToCart = (order) => {
    let [ ...newState ] = cart;
    newState.push(order);
    setCart(newState);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home cart={cart} />} />
          <Route path='/shop' element={<Shop cart={cart} addToCart={addToCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
