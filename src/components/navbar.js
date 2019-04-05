import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cookie from 'js-cookie';

import logoMain from "../../static/assets/images/logo-main.png";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            language_toggle: true
        }


        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {
        if(Cookie.get("language")) {
            this.setState({
                language_toggle: false
            })
        }
    }
    
	toggle() {
        this.setState({
            language_toggle: !this.state.language_toggle,
        });

        if (!this.state.language_toggle) {
            console.log("Cookie Removed");
            
            Cookie.remove("language")
            } else {
                console.log("Cookie Set");
                
                Cookie.set("language", 'spanish')
            }
        }
    
    render() {

        return (
            <div className='navbar'>
                <div className="logo">
                    <img src={logoMain}/>
                </div>
                <div className="navLinks">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/account">Account</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    {Cookie.get("session") ? <NavLink to="/" onClick={() => Cookie.remove("session")}>Log Out</NavLink> : null}
                 
                    <div className="language-button-wrapper">
                        <button className="language-toggle-btn" onClick={this.toggle}>{this.state.language_toggle ? 'Español' : 'English'}</button>
                    </div>
                </div>
            </div>
        )
    }
}