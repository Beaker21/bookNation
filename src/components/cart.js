import React, {Component} from 'react';
import Cookie from 'js-cookie';

export default class Cart extends Component {
 constructor(props) {
     super(props);

     this.state = {
       cartitems: [],
       users: []
   }


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

   return (
     <div>
     <div className="container">
       <div className="header">
         <h3 className="header-logo">Store</h3>

         <div className="header-nav">
           <ul>
             <li><a href="#0">Home</a></li>
             <li><a href="#0">Products</a></li>
             </ul>
         </div>
       </div>

     <div className="products">
     </div>

     <div className="shopping-cart">
           <div className="shopping-cart-head">
             <span className="product-quantity">0</span> Product(s) in Cart
           </div>
           <ul className="shopping-cart-list">
           </ul>
           <div className="cart-buttons">
             <a href="#0" className="button empty-cart-btn">Empty</a>
             <a href="#0" className="button cart-checkout">Checkout - <span className="total-price">$0</span></a>
           </div>
         </div>
       </div>
       <div className="app-wrapper"></div>
     </div>



       )
 }
 }