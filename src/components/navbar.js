import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/auth">Auth</NavLink>

    )
}

export default NavBar;