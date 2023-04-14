/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer id='bottom'>
      <Button variant='light'>Subscribe to newsletter</Button>
      <ul className='footer-list'>
        <li>
          <a className='footer-links' href="#">Terms and Conditions</a>
        </li>
        <li>|</li>
        <li>
          <a className='footer-links' href="#">Privacy</a>
        </li>
        <li>|</li>
        <li>
          <a className='footer-links' href="#">Trademarks</a>
        </li>
        <li>|</li>
        <li>
          <a className='footer-links' href="#">Cookies Policy</a>
        </li>
        <li>|</li>
        <li>
          <a className='footer-links' href="#">Cookies Settings</a>
        </li>
      </ul>
      <p>© 2023 RedTeam Online Store</p>
    </footer>
  )
}
