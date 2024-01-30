import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" w-full h-24  grid grid-cols-[3rem_5fr_1fr_3rem]">
      <div className="col-start-2 col-span-1 flex flex-row justify-center box-border pl-60 ">
        <ul className="flex flex-row my-auto mx-0 gap-10 ">
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold">Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold	">Services</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold	">Industry</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold	">About</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold	">Contact</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <h1 className="hover:underline text-white font-bold	">Careers</h1>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-start-3 col-span-1 flex flex-row  my-auto mx-0 justify-center ">
        <button className="w-40 h-11 box-border border-0 border-inherit border-solid bg-white rounded-[28px] ">
          Employee Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
