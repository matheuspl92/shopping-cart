import React from 'react';
import { Button, Container, Row, Stack } from 'react-bootstrap';
import OrderCard from '../Order/OrderCard';
import { v4 as uuidv4 } from 'uuid';
import './Cart.css';

export default function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Your cart</h2>
      <Container id='cart-container'>
        <Row className='d-flex justify-content-center p-5'>
          {cart.length ? cart.map((order) => {
            console.log(order)
            return <OrderCard key={uuidv4()} orderData={order} removeFromCart={removeFromCart} />
          }) : <h3>Things are pretty empty around here...</h3>}
        </Row>
      </Container>
      {cart.length ? <Stack className='d-flex justify-content-end m-5' direction='horizontal' gap={5}>
        <h3>{`Order total: $`}</h3>
        <Button size='lg' variant='dark'>Checkout</Button>
      </Stack> : null}
    </div>
  )
}
