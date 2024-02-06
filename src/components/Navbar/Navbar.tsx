import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props:any) {

  return (
    <nav className=" w-full h-24  grid grid-cols-[3rem_5fr_1fr_3rem] ">
      <div className="col-start-2 col-span-1 flex flex-row justify-center box-border pl-60 ">
        <ul className="flex flex-row my-auto mx-0 gap-10 ">
          <li>
            <NavLink to="/">
              <h1 className="hover:underline  font-bold" style={{color:props.color}}>Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/services">
              <h1 className="hover:underline font-bold	" style={{color:props.color}}>Services</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline font-bold	" style={{color:props.color}}>Industry</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <h1 className="hover:underline font-bold	" style={{color:props.color}}>About</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline font-bold	" style={{color:props.color}}>Contact</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline font-bold	" style={{color:props.color}}>Careers</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-start-3 col-span-1 flex flex-row  my-auto mx-0 justify-center ">
        <button className="w-40 h-11 box-border border-0 border-inherit border-solid rounded-[28px] " style={{backgroundColor:props.button_color, color:props.button_text}}>
          Employee Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
