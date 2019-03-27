import React, { Component } from 'react';
import SearchBar from './search'

export default class Home extends Component {
  render() {
    return(
      <div className='home-page'>

        <div className='home-searchbar'>
          <SearchBar />
        </div>
        <div className='home-genre-buttons'>
          <h3>5 Genre buttons</h3>
        </div>

      </div>
    );
  }
}