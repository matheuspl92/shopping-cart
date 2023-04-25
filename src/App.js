import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {
  const [ cart, setCart ] = useState([]);

  const addToCart = (order) => {
    let [ ...newState ] = cart;
    newState.push(order);
    setCart(newState);
  }

  const removeFromCart = (id) => {
    let [ ...newState ] = cart;
    const orderToRemove = newState.indexOf({ id })
    newState.splice(orderToRemove, 1);
    setCart(newState);
  }

  useEffect(() => {
  }, [cart])

  return (
    <BrowserRouter>
      <div className="App">
        <Nav cart={cart} />
        <Routes>
          <Route path='shopping-cart/' element={<Home cart={cart} />} />
          <Route path='shopping-cart/shop' element={<Shop cart={cart} addToCart={addToCart}/>} />
          <Route path='shopping-cart/cart' element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
