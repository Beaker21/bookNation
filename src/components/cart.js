import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logoMain from '../../static/assets/images/logo-main.png';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div className="header-logo">
          <img src={logoMain}/>
        </div>
            
        <div className="shopping-cart">
          <div className="shopping-cart-head">
            <h4>My Cart</h4>
          </div>

          <div className="shopping-cart-list">
            <ul>
              (Products go here)
            </ul>
          </div>

          <div className="cart-total">
            <span>Subtotal: $0</span>
          </div>

          <div className="cart-buttons">
            <a href="#0" className="empty-cart-btn">
              <FontAwesomeIcon icon={faTrashAlt} />
            </a>
    
            <a href="#0" className="cart-checkout-btn">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}