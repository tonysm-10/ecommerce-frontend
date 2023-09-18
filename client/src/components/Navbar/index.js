import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = function ({ subtotal, cartCount ,removeFromCart, cart, openSidebar, closeSidebar, isOpen }) {
  const sidebar = (
    <div className='sidebar slide-from-right'>
      <Link to='/#' onClick={closeSidebar}>x</Link>
      <h3>CART</h3>
      {cart.map((product) => (
        <div className='cart' key={product.id}>
          <img className='img' src={product.img} alt={product.name} />
          <div className='details'>
            <h5 className='margin'>{product.name}</h5>
            <p className='margin p-tag'>${product.discount ? product.price - 10 : product.price}</p>
            <p className='margin p-tag'>Selected {product.count}</p>
            <button onClick={() => removeFromCart(product.id)} className='remove-item'>Remove Item</button>
          </div>
        </div>
      ))}
{cartCount !== 0 ? <p>Subtotal ${subtotal}</p> : null}     
{cartCount !== 0 ? <button className='checkout'>Checkout</button> : null}

    </div>
  );

  return isOpen ? sidebar : (
    <div className='navbar-page'>
      <nav className='navbar'>
        <h1 className='title'>GYM ESSENTIALS</h1>
        <div className='nav-links'>
          <Link to='/' onClick={openSidebar} className='link'>
            cart 
            {
  cartCount !== 0 ? <span className='cardCount'>{cartCount}</span> : null
}
            
          </Link>
          <Link to='/' className='link'>contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
