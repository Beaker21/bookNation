import React, { Component } from 'react';
import BookGrid from "./grid";
import SearchBar from './search'
import GenreButtons from './genre-buttons';


export default class Home extends Component {
  render() {
    return(
      <div className='home-page'>
        <div className='casa'>
          <div className='home-top'>
              <div className='home-logo'>
                  <h2>BOOK NATION</h2>
              </div>
          </div>
          <div className='home-middle'>
              <div className='home-searchbar'>
                  <SearchBar />
              </div>
          </div>
        </div>
        <div className='home-bottom'>
            <div className='home-genre-buttons'>
            
            </div>
        </div>
        <BookGrid />
      </div>
    );
  }
}