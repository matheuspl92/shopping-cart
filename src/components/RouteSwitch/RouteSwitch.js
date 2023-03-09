import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<ShoppingCart />} />
            </Routes>
        </BrowserRouter>
    )
}
