import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './index.css'
const ProductList = ({isOpen, addToCart, product, handleAddOne, handleMinusOne, handleAddTwo, handleMinusTwo, handleAddThree, handleMinusThree, handleAddFour, handleMinusFour, handleAddFive, handleMinusFive, handleAddSix, handleMinusSix, handleAddSeven, handleMinusSeven, handleAddEight, handleMinusEight, handleAddNine, handleMinusNine}) => { 



  return (
    <div id={isOpen ? "no-scroll": ''} className='product-list'>
      {/* Add className for styling */}
      <ProductCard
      handleAdd={handleAddOne}
      handleMinus={handleMinusOne}
      product={product[0]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddTwo}
      handleMinus={handleMinusTwo}
      product={product[1]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddThree}
      handleMinus={handleMinusThree}
      product={product[2]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddFour}
      handleMinus={handleMinusFour}
      product={product[3]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddFive}
      handleMinus={handleMinusFive}
      product={product[4]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddSix}
      handleMinus={handleMinusSix}
      product={product[5]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddSeven}
      handleMinus={handleMinusSeven}
      product={product[6]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddEight}
      handleMinus={handleMinusEight}
      product={product[7]}
      addToCart={addToCart}
    />
    <ProductCard
      handleAdd={handleAddNine}
      handleMinus={handleMinusNine}
      product={product[8]}
      addToCart={addToCart}
    />

    </div>
  );
};

export default ProductList;