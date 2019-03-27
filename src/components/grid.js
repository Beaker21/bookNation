import React, { Component } from 'react';

export default class BookGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
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