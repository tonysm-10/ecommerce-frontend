import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css';

const Footer = function() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='icon-list'>
          <a href='/'><FaInstagram className='icon'/></a>
          <a href='/'><FaTwitter className='icon' /></a>
          <a href='/'><FaFacebook className='icon' /></a>
        </div>
        <div>
          <a className='footerName' href='/'>© GYMESSENTIALS</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
