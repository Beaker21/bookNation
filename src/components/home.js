import React, { Component } from 'react';
import BookGrid from "./grid";
import SearchBar from './search'

import logoMain from "../../static/assets/images/logo-main.png";


export default class Home extends Component {
  render() {
    return(
      <div className='home-page'>
        <div className='casa'>
          <div className='home-top'>
              <div className='home-logo'>
                <img className='photo-main' src={logoMain}/>
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