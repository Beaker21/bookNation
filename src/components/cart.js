import React from 'react';

const Cart  = () => {
  return(
    <div className="cart-container">
      <h3 className="header-logo">Store</h3>
          
      <div className="shopping-cart">
          <div className="shopping-cart-head">
            <h4>Product(s) in Cart</h4>
            <span className="product-quantity">0</span> 
          </div>
          <ul className="shopping-cart-list">
              (Products go here)
          </ul>
          <div className="cart-buttons">
            <a href="#0" className="button empty-cart-btn">Empty</a>
            <a href="#0" className="button cart-checkout">Checkout - <span className="total-price">$0</span></a>
          </div>
        </div>
      </div>
  )
}

export default Cart;





























