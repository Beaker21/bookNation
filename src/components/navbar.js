import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Cookie from "js-cookie"

import logoMain from "../../static/assets/images/logo-main.png";

const NavBar = () => {
    return (

            
      <div className='navbar'>
            <div className="logo">
                <img src={logoMain}/>
            </div>
            <div className="navLinks">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/account">Account</NavLink>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                {Cookie.get("session") ? <NavLink to="/" onClick={() => Cookie.remove("session")}>Log Out</NavLink> : null}
            </div>

        </div>

    )
}

export default NavBar;