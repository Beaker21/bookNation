import React, { Component } from 'react';

import booksStack from "../../static/assets/images/books-stack.jpg";

export default class CheckoutPage extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className="app-container">
        <div className="row">
          <div className="col">
            <Item img={booksStack} />
          </div>
          <div className="col no-gutters">
            <Checkout />
          </div>
        </div>
       </div>
    )
  }
}

const Item = (props) => (
  <div className="item-container">
    <div className="item-image">
      <img src={props.img}/>
      <div className="item-details">
        <h3 className="item-name"> {props.name} </h3>
        <h2 className="item-price"> {props.price} </h2>
      </div>
    </div>
  </div>
);

const Checkout = (props) => (
 <div className="checkout">
    <div className="checkout-container">
     <h3 className="heading-3">Checkout</h3>
     <Input label="Full Name" type="text" name="full_name" />
     <Input label="Email" type="text" name="email" />
     <Input label="Address Line 1" type="text" name="address_line_1" />
     <Input label="Address Line 2" type="text" name="address_line_2" />
     <Input label="City" type="text" name="city" />
     <Input label="State" type="text" name="state" />
     <Input label="Postal Code" type="text" name="postal_code" />
     <br/>
     <Input label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
      <div className="row">
        <div className="col">
          <Input label="Expiration Date" type="month" name="exp_date" />
        </div>
        <div className="col">
          <Input label="CVV" type="number" name="cvv" />
        </div>
      </div>
      <Button text="Place order" />
    </div>
 </div>
);

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc}/>
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);


// ReactDOM.render(
//   <App />, document.getElementById('root')
// )
