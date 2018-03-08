import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div className="site-id">
                <Link to="/" className="menu-item">
                    <span className="helper"></span>
                    <img className="logo" src="./img/logo.png" />
                </Link>
            </div>
            <menu>
                <NavLink to="/" exact className="menu-item">Home</NavLink>
                <NavLink to="/examples" className="menu-item">Examples</NavLink>
                <NavLink to="/services" className="menu-item">Services</NavLink>
                <NavLink to="/contact" className="menu-item">Contact</NavLink>
            </menu>
        </header>
    );
};

export default Header;