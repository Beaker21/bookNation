import React, { Component } from 'react';

export default class BookGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genre: "",
            books: []
        }
    }

    render() {
        return(
            <div className="grid-container">
                <div className="genre-title">
                    {this.state.genre}
                </div>
                {this.state.books.map((data) => (
                    <div className="book-data">
                        {data}
                    </div>
                ))}
            </div>
        )
    }
}