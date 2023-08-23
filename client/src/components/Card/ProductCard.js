import React from 'react';
import './index.css';

const ProductCard = ({ handleAdd, handleMinus, product, addToCart }) => {
  const { img, name, price, inStock, count, id } = product;

  return (
    <div key={id} className="product-card">
      <img src={img} alt={name} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price}</p>
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

