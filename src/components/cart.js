
import React, { Component } from 'react';
import Cookie from 'js-cookie';


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
      <div>
        <div className="cart-container">
          <h3 className="header-logo">Store</h3>
            
          <div className="shopping-cart">
            <div className="shopping-cart-head">
              <h4>Product(s) in Cart</h4>
              <span className="product-quantity">0</span> 
            </div>
            <ul className="shopping-cart-list">
                {this.state.items.map(item => {
                  <div>{item}</div>
                })}
            </ul>
            <div className="cart-buttons">
              <a href="#0" className="cart-btn empty-cart-btn">Empty</a>
              <a href="#0" className="cart-btn cart-checkout">Checkout - <span className="total-price">$0</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

