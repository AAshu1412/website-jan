import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className='main-nav'>
        <div className='header-content'>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>Services</li>
                <li>Industry</li>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className='employee-button'>
            <button>Employee Login</button>
        </div>
    </nav>
  );
}

export default Navbar;
