
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <p>Gran Burga</p>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/categoria/Burgas">Burgas</Link></li>
                    <li><Link to="/categoria/BurgasVeggi">Burgas Veggi</Link></li>
                    <li><Link to="/categoria/SuperBurgas">Super Burgas</Link></li>
                    <li><Link to="/categoria/Papas">Papas</Link></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
