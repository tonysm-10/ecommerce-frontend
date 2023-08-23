import React from 'react';
import './index.css';

const Navbar = function ({removeFromCart, cart, openSidebar, closeSidebar, isOpen }) {
  const sidebar = (
    <div className='sidebar slide-from-right'>
      <a onClick={closeSidebar}>x</a>
      <h3>CART</h3>
      {cart.map((product) => (
        <div className='cart' key={product.id}>
          <img className='img' src={product.img} alt={product.name} />
          <div className='details'>
            <h5 className='margin'>{product.name}</h5>
            <p className='margin'>{product.price}</p>
            <p className='margin'>{product.count} Selected</p>
            <button onClick={() => removeFromCart(product.id)} className='remove-item'>Remove Item</button>
          </div>
        </div>
      ))}
    </div>
  );

  return isOpen ? sidebar : (
    <div className='navbar-page'>
      <nav className='navbar'>
        <h1 className='title'>GYM ESSENTIALS</h1>
        <div className='nav-links'>
          <a onClick={openSidebar} className='link'>
            cart
          </a>
          <a className='link'>contact</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;