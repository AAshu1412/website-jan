import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className='w-full h-24 grid grid-cols-6'>
        <div className='col-start-2 col-end-6'>
            <ul className='list-none h-24 flex flex-row justify-center items-center gap-8'>
            <li className='hover:text-red-500 hover:underline'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='hover:text-red-500 hover:underline '>Services</li>
                <li className='hover:text-red-500 hover:underline'>Industry</li>
                <li className='hover:text-red-500 hover:underline'>About</li>
                <li className='hover:text-red-500 hover:underline'>Contact</li>
                <li className='hover:text-red-500 hover:underline'>Careers</li>
            </ul>
        </div>
        <div className='col-end-7 flex flex-row justify-center items-center '>
            <button className="w-36 h-8 rounded-2xl box-border border-2">Employee Login</button>
        </div>
    </nav>
  );
}

export default Navbar;
