import React from 'react';
import { Container, Row } from 'react-bootstrap';
import products from '../../data/products';
import ItemCard from '../Card/ItemCard';
import { v4 as uuidv4 } from 'uuid';
import './Shop.css';

export default function Shop({ cart, addToCart }) {
    return (
        <div>
            <h2>SHOP</h2>
            <Container fluid id='shop-container'>
                <Row className='d-flex justify-content-center p-5'>
                    {products.map(product => {
                        return <ItemCard key={uuidv4()} title={product.cardName} text={`Price: $ ${product.cardPrice}`} srcImage={product.cardImg} addToCart={addToCart} />
                    })}
                </Row>
            </Container>
        </div>
    )
}
