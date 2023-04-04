import React from 'react';
import { Button, Card, Container, Image, Row } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <div>
      <section id='top'>
        <h2>Unleash the Red Team power!</h2>
        <Image src='https://www.amd.com/system/files/2022-10/1678052-radeon-background-1920w_1.jpg' />
      </section>
      <section id='middle'>
        <Container >
          <Row className='d-flex justify-content-between align-items-top'>
            <Card className='border-0' style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://www.amd.com/system/files/styles/992px/private/2022-10/1678052-high-performance-rendering-1260x709.jpg?itok=yoOitXOh" />
              <Card.Body>
                <Card.Title>High Performance Rendering</Card.Title>
                <Card.Text>
                High Performance Rendering is a smarter approach to maximizing performance and visuals through the power of AMD Software, AMD FidelityFX™2 technology, & AMD RDNA™ 3 architecture.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='border-0' style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://www.amd.com/system/files/styles/992px/private/2022-10/1678052-amd-rdna3-chip-diagram-1260x709_0.jpg?itok=WkZaF2lp" />
              <Card.Body>
                <Card.Title>AMD Radiance Display™ Engine</Card.Title>
                <Card.Text>
                The AMD Radiance Display™ Engine paired with DisplayPort™ 2.1 delivers 12-bit HDR and full coverage of the REC2020 color space for incredible color accuracy at up to 8K 165Hz.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='border-0' style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://www.amd.com/system/files/styles/992px/private/2023-02/1875004-lou-keyart-w-radeon-bundle-1260x709_0.jpg?itok=N67hLnEH" />
              <Card.Body>
                <Card.Title>Get THE LAST OF US™ Part I</Card.Title>
                <Card.Text>
                Special offer when you buy select AMD Radeon™ RX graphics cards.
                </Card.Text>
                <Button variant="dark">LEARN MORE</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
      <section id='bottom'>
        <Button variant='light'>Subscribe to newsletter</Button>
        <p>Terms and Conditions | Privacy | Trademarks | Cookies Policy | Cookies Settings</p>
        <p>© 2023 RedTeam Online Store</p>
      </section>
    </div>
  )
}
