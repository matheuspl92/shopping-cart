import React from 'react';
import { Card } from 'react-bootstrap';

export default function OrderCard({ orderData }) {
    return (
        <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={orderData.srcImage + '/300'} />
            <Card.Body>
                <Card.Title>{orderData.title}</Card.Title>
                <Card.Text>
                    {`Quantity: ${orderData.orderQtd}`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
