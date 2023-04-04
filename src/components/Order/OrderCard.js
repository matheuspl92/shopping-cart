import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function OrderCard({ orderData, removeFromCart }) {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={orderData.srcImage + '/300'} />
            <Card.Body>
                <Card.Title>{orderData.title}</Card.Title>
                <Card.Text>
                    {`Quantity: ${orderData.orderQtd}`}
                </Card.Text>
                <Button variant='light' onClick={() => {
                    removeFromCart(orderData.id);
                }}>Remove order</Button>
            </Card.Body>
        </Card>
    )
}
