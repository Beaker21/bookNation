import React, { Component } from 'react';
import GenreButtons from './genre-buttons';
import SearchBar from './search-bar';

export default class Home extends Component {
  render() {
    return(
      <div className='home-page'>
        <div className='home-top'>
            <div className='home-logo'>
                <h2>Logo</h2>
            </div>
            <div className='home-login'>
                <h3>Login</h3>
            </div>
        </div>
        <div className='home-middle'>
            <div className='home-searchbar'>
                <SearchBar />
            </div>
        </div>
        <div className='home-bottom'>
            <div className='home-genre-buttons'>
                <GenreButtons />
            </div>
        </div>
      </div>
    );
  }
}