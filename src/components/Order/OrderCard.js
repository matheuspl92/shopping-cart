import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import './OrderCard.css';

export default function OrderCard({ orderData, removeFromCart }) {
    return (
        <Container className='order-card justify-content-between align-items-center'>
            <div className='img-and-info'>
                <Image src={orderData.srcImage + '/300'} alt='Product' />
                <div>
                    <p>{orderData.title}</p>
                    <p>{`Unit price: ${orderData.price}`}</p>
                    <p>{`Order quantity: ${orderData.orderQtd}`}</p>
                </div>
            </div>
            <div className="total-and-button">
                <p>{`Order total: ${orderData.orderQtd * orderData.price}`}</p>
                <Button variant='light' onClick={() => {
                        removeFromCart(orderData.id);
                    }}>Remove order</Button>
            </div>
        </Container>
    )
}

