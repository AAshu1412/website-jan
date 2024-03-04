import React from "react";
import arrow from "../../assets/arrow.svg";
import scroll from "../../assets/scroll.svg";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

function Home_top() {
  return (
    <div className="bg-back bg-no-repeat lg:bg-cover h-[600px] bg-cover box-border ">
      <Navbar color="white" button_color="white"/>
      <div className="lg:w-[875px] w-[615px] lg:ml-24 ml-4 lg:mt-16 mt-10 flew flex-col  ">
        {" "}
        {/*h-80 bg-slate-500 bg-yellow-600 bg-orange-800*/}
        <h1 className="text-white	lg:text-6xl text-5xl font-light	">
          A one-stop Solution Provider for{" "}
          <span className="font-bold	">
            embedded product engineering and development
          </span>
        </h1>
        <br />
        <h1 className=" lg:w-[675px] w-[550px] text-white font-normal text-xl">
          We are committed to provide the highest business value to our
          customers and lives by a value-focused, technology centred
          organisation.
        </h1>
        <br />
        <NavLink to="/about" className="text-white font-medium flex flex-row gap-3">
          Contact Us <img src={arrow} className="w-7"></img>
        </NavLink>
      </div>
      <div className="flex flex-row justify-center lg:mt-16 mt-8">
        <div className="grid grid-cols-1 gap-2 ">
          <h1 className="text-xs text-white">Discover more</h1>
          <div className="flex justify-center">
            {" "}
          <a> <img src={scroll} className="w-5"></img></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_top;
