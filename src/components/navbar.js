import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/account">Account</NavLink>
            <NavLink to="/auth">Auth</NavLink>
        </div>

    )
}

export default NavBar;