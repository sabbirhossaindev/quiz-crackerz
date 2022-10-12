import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
      textDecoration: "underline",
    };
  
    let activeClassName = "underline";

const Header = () => {
    
    return (
        <div className="navbar bg-base-100 shadow-lg mb-8">
        <div className="flex-1">
            <h2 className='text-2xl text-rose-600'>Brain Test</h2>
        </div>
        <div className="link-list">
            <NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Topics</NavLink>
            <NavLink to='/statistics' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Statistics</NavLink>
            <NavLink to='/blog' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Blog</NavLink>
        </div>    
    </div>
    );
};

export default Header;