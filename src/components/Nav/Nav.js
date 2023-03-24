import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav({ cart }) {

    return (
        <nav>
            <h1 id='store-name'><strong style={{ color: 'red' }}>Red</strong>Team</h1>
            <ul id='link-list'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <div id="cart-div">
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                    <div id='cart-display'>
                        {cart.length}
                    </div>
                </div>

            </ul>
        </nav>
    )
}
