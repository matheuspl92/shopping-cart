import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCard from '../Card/ItemCard'

export default function Shop() {
    return (
        <div>
            <h2>Shop</h2>
            <Container>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </Container>
        </div>
    )
}
