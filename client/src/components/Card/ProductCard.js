import React from 'react';
import './index.css';

const ProductCard = ({ handleAdd, handleMinus, product, addToCart }) => {
  const { discount, img, name, price, inStock, count, id } = product;
  const discountStyle = {
    textDecoration: 'line-through'
  }
  
  return (
    <div key={id} className="product-card">
      <img src={img} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <div className='flex'>
            {discount ? <p className='price-discount'>$48.00</p> : null}
            <p className="card-price" style={discount ? discountStyle : null}>${price}</p>
        </div>
        <p className="card-stock">In Stock: {inStock}</p>
        <div class='amount'>
          <button onClick={handleAdd} className='btnAddMinus' disabled={count === inStock}>+</button>
          <p>{count}</p>
          <button onClick={handleMinus} className='btnAddMinus' disabled={count === 1}>-</button>
        </div>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

