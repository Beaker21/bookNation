import React, { Component } from 'react';

import GenreButtons from './genre-buttons'

export default class BookGrid extends Component {
    constructor(props) {
        super(props)

        this.state = {
            books: [],
            genre: "all"
        }

        this.handleGenreChange = this.handleGenreChange.bind(this)
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

    handleGenreChange(genre) {
        this.setState({
            genre: genre
        })
    }

    render() {
        return(
            <div className = 'grid-wrapper'>
                <div className='home-bottom'>
                    <div className='home-genre-buttons'>
                        <GenreButtons handleGenreChange={this.handleGenreChange} />
                    </div>
                </div>
                <div className="grid-container">
                    {this.state.books.map((data) => (
                        this.state.genre === "all" || this.state.genre === data[6] ? (<div className="book-data">
                            <div className="book-data-title">
                                {data[1]}
                            </div>
                            
                            <img src={data[5]}></img>
                        </div>) : null
                    ))}
                </div>
            </div>
        )
    }
}