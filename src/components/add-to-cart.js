import React, { Component } from 'react';


export default class AddToCart extends Component {
    constructor() {
        super(props);

        this.state = {
            cart_id: 0
        }

        this.handleCartItem = this.handleCartItem.bind(this)
    }

    componentDidMount() {
        let email = Cookie.get("session")

        if (email) {
            fetch (`http://127.0.0.1:5000/single/email/user/${email}`, {
            method: 'GET',
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
            })
            .then(response => {return response.json();})
            .then(data => {this.setState({cart_id: data[0]}), console.log(this.state.cart_id)})
            .catch(err => {console.log("Fetch Error" + err)})
        }

    }

    handleCartItem(event) {
        event.preventDefault()
        fetch ("http://127.0.0.1:5000/cart_item/input", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({cart_id: this.props.cart_id, book_id: this.props.book_id})
        })
        .then(response => {return response.json();})
        .then(responseData => {return responseData})
        .then(() => this.props.history.push('/cart'))
        .catch(err => {console.log("Fetch Error" + err)})
    }


    render() {
        return(
            <div>
                <button onClick={handleAddToCart} className="btn">Add to Cart</button>
            </div>
        )
    }
}


