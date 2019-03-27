import React, { Component } from "react";
import { NavLink } from "react-router-dom";

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
                <NavLink to="/auth">Auth</NavLink>
            </div>
        </div>

    )
}

export default NavBar;