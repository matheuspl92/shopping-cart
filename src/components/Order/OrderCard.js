import React from 'react';
import { Card } from 'react-bootstrap';

export default function OrderCard({ orderData }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={orderData.srcImage + '/300'} />
            <Card.Body>
                <Card.Title>{orderData.title}</Card.Title>
                <Card.Text>
                    {orderData.text}
                </Card.Text>
                <Card.Text>
                    {`Quantity: ${orderData.orderQtd}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
