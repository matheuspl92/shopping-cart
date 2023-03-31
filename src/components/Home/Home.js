import React from 'react';
import { Button, Image } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <div>
      <section id='top'>
        <h2>Unleash the Red Team power!</h2>
        <Image src='https://www.amd.com/system/files/2022-10/1678052-radeon-background-1920w_1.jpg' />
      </section>
      <section id='middle'>
        <h2>Amazing selection of cards</h2>
        
      </section>
      <section id='bottom'>
        <Button variant='light'>Subscribe to newsletter</Button>
        <p>Terms and Conditions | Privacy | Trademarks | Cookies Policy | Cookies Settings</p>
        <p>© 2023 RedTeam Online Store</p>
      </section>
    </div>
  )
}
