import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Cookie from 'js-cookie';
import logoMain from '../../static/assets/images/logo-main.png';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.handleCartItems = this.handleCartItems.bind(this)
  }

  handleCartItems(event) {
    event.preventDefault()
    fetch ("http://127.0.0.1:5000/cart_items", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {return response.json();})
    .then(responseData => {this.setState({items: responseData})})
    .catch(err => {console.log("Fetch Error" + err)})
}
  
  
 componentDidMount() {
   fetch (`https://book-nation.herokuapp.com/single/email/user/${Cookie.get('session')}`, {
       method: 'GET',
       headers: {
           "accepts": "application/json",
           "Content-Type": "application/json"
       }


   })
   
   .then(response => {console.log(response.json());})
   .then(data => {
     this.setState({
       users: data
      })
      // console.log(users)

  //     fetch (`https://book-nation.herokuapp.com/cart/<id>`, {
  //      method: 'GET',
  //      headers: {
  //          "accepts": "application/json",
  //          "Content-Type": "application/json"
  //      }
   
   
  //  })

  //   })
  //  .catch(err => {
  //      console.log("Fetch error" + err)
   })

.then(response => {return response.json();})
.then(responseData => {console.log(responseData)})
.then(data => {this.setState({books: data });})
.catch(err => {
    console.log("Fetch error" + err)
})
}
  
  render() {
    return(
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
               {this.state.items.map(item => {
                  <div>{item}</div>
                })}
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


