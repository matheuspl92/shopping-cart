import React, { useRef } from 'react';
import { Overlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav({ cart }) {
    const target = useRef(null);

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
                    <li ref={target} >Cart</li>
                    <Overlay target={target.current} show={true} placement="right">
                        {({
                            placement: _placement,
                            arrowProps: _arrowProps,
                            show: _show,
                            popper: _popper,
                            hasDoneInitialMeasure: _hasDoneInitialMeasure,
                            ...props
                        }) => (
                            <div
                                {...props}
                                style={{
                                    position: 'absolute',
                                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                    padding: '2px 10px',
                                    color: 'white',
                                    borderRadius: 3,
                                    ...props.style,
                                }}
                            >
                                {cart.length}
                            </div>
                        )}
                    </Overlay>
                </Link>
            </ul>
        </nav>
    )
}
