import React, { Component } from 'react';

export default class BookGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    render() {
        return(
            <div className="grid-container">
                {this.state.books.map((data) => (
                    <div className="book-data">
                        {data}
                    </div>
                ))}
            </div>
        )
    }
}