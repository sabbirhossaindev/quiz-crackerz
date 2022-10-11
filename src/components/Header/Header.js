import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg mb-8">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl" href='/'>Brain Test</a>
        </div>
        <div className="link-list">
            <Link to='/'>Home</Link>
            <Link to='topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    </div>
    );
};

export default Header;