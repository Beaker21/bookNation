import React, { Component } from 'react';

export default class BookDetail extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }

    render() {
        return (
            <div classname="book-detail-wrapper">
                <div className="book-details-wrapper">
                    <h1>Book Details</h1>
                </div>
                <div className="book-title">
                    <h1>Book Title</h1>
                </div>
                <div classname="book-author">
                    <h2>Author</h2>
                </div>
                <div classname="buy-book">
                    <a href="#">Buy</a>
                </div>
                <div classname="book-cover">
                    <img src="#">Cover</img>
                </div>
                <div classname="book-genre">
                    <p>Genre</p>
                </div>
                <div classname="book-summary">
                    <p>Summary</p>
                </div>
                
            </div>
        );
    }
}