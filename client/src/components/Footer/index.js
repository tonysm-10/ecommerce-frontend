import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './index.css';
import { Link } from 'react-router-dom';

const Footer = function() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='icon-list'>
          <Link to='/'><FaInstagram className='icon'/></Link>
          <Link to='/'><FaTwitter className='icon' /></Link>
          <Link to='/'><FaFacebook className='icon' /></Link>
        </div>
        <div>
          <Link className='footerName' to='/'>© GYMESSENTIALS</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
