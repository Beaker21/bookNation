import React, { Component } from 'react';

import Auth from './authentication/auth'

import BookGrid from "./grid"


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>


        <Auth />

        <BookGrid />

      </div>
    );
  }
}
