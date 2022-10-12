import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg mb-8">
        <div className="flex-1">
            <h2 className='text-2xl text-rose-600'>Brain Test</h2>
        </div>
        <div className="link-list">
            <Link to='/'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    </div>
    );
};

export default Header;