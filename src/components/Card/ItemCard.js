import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function ItemCard( { title = 'Card Title', text = "Some quick example text to build on the card title and make up the bulk of the card's content.", srcImage = "holder.js/100px180"} ) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={srcImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}
