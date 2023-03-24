import React from 'react';
import { Container } from 'react-bootstrap';
import OrderCard from '../Order/OrderCard';
import { v4 as uuidv4 } from 'uuid';

export default function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      <Container>
        {cart.map((order) => {
          console.log(order)
          return <OrderCard key={uuidv4()} orderData={order} />
        })}
      </Container>
    </div>
  )
}
