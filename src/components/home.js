import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return(
      <div className='home-page'>
            <div className='home-searchbar'>
                <h1>Search bar</h1>
            </div>
            <div className='home-genre-buttons'>
                <h3>5 Genre buttons</h3>
            </div>
      </div>
    );
  }
}