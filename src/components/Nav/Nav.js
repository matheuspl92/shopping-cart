import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return (
        <nav>
            <h1>StoreName</h1>
            <ul>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/cart'>
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}
