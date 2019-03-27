import React, { Component } from 'react';

export default class BookGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        fetch ("https://book-nation.herokuapp.com/library", {
            method: "GET",
            headers: {
                "accepts": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json();})
        .then(data => {this.setState({books: data});})
        .catch(error => {
            console.log("Fetch error" + error)
        })
    }

    render() {
        return(
            <div className="grid-container">
                {this.state.books.map((data) => (
                    <div className="book-data">
                        <div className="book-data-title">
                            {data[1]}
                        </div>
                        
                        <img src={data[5]}></img>
                    </div>
                ))}
            </div>
        )
    }
}