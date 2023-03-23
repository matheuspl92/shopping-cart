import React from 'react'
import { Container, Row } from 'react-bootstrap'
import products from '../../data/products'
import ItemCard from '../Card/ItemCard'

export default function Shop({ cart, addToCart }) {
    return (
        <div>
            <h2>Shop</h2>
            <Container>
                <Row>
                    {products.map( product => {
                        return <ItemCard title={product.cardName} text={`Price: $ ${product.cardPrice}`} srcImage={product.cardImg} addToCart={addToCart} />
                    })}
                </Row>
            </Container>
        </div>
    )
}
