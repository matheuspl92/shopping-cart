import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import OrderCard from '../Order/OrderCard';
import { v4 as uuidv4 } from 'uuid';

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your cart</h2>
      <Container fluid id='shop-container'>
        <Row className='d-flex justify-content-center p-5'>
          {cart.length ? cart.map((order) => {
            console.log(order)
            return <OrderCard key={uuidv4()} orderData={order} removeFromCart={removeFromCart} />
          }) : <h3>Things are pretty empty around here...</h3>}
        </Row>
      </Container>
      <Button size='lg' variant='dark'>Checkout</Button>
    </div>
  )
}
