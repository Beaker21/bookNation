import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Account from "./account";
import Home from "./home";
import NavBar from "./navbar";
import Auth from "./authentication/auth";

import Auth from './authentication/auth'

import BookGrid from "./grid"



export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Home/>
      
        <Router>
          <div>
          <NavBar />
           <Switch>   
              <Route path="/" component={Home} />
              <Route path="/account" component={Account} />
              <Route path="/auth" component={Auth} />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
