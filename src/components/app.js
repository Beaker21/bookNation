import React, { Component } from 'react';

import CheckoutPage from './checkout';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Checkout</h1>

        <CheckoutPage />
      </div>
    );
  }
}
