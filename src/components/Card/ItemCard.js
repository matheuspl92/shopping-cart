import React, { useState } from 'react';
import { Button, Card, FormControl } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function ItemCard({ title = 'Card Title', price = "", srcImage = "holder.js/100px180", addToCart }) {
  const [orderQtd, setOrderQtd] = useState('');

  const handleQtdChange = (event) => {
    const qtd = event.target.value;

    (qtd > 0) ? setOrderQtd(qtd) : setOrderQtd('');
    console.log(qtd)
  }

  const handleAdd = () => {
    if (orderQtd !== '') {
      addToCart({ id: uuidv4(), title, price, srcImage, orderQtd });
    }
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={srcImage + '/300'} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {`Price: ${price}`}
        </Card.Text>
        <div>
          <FormControl type='number' value={orderQtd} placeholder='Quantity' onChange={(event) => { handleQtdChange(event) }} />
          <Button variant="dark" onClick={handleAdd}>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  )
}
