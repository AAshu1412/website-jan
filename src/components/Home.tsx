import React from "react";
import arrow from "../assets/arrow.svg";
import scroll from "../assets/scroll.svg";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="bg-background bg-no-repeat bg-cover h-[600px] box-border">
        <Navbar />
        <div className="w-[875px] ml-24 mt-16 flew flex-col   ">
          {" "}
          {/*h-80 bg-slate-500 bg-yellow-600 bg-orange-800*/}
          <h1 className="text-white	text-6xl font-light	">
            A one-stop Solution Provider for{" "}
            <span className="font-bold	">
              embedded product engineering and development
            </span>
          </h1>
          <br />
          <h1 className=" w-[675px] text-white font-normal text-xl">
            We are committed to provide the highest business value to our
            customers and lives by a value-focused, technology centred
            organisation.
          </h1>
          <br />
          <h1 className="text-white font-medium flex flex-row gap-3">
            Contact Us <img src={arrow} className="w-7"></img>
          </h1>
        </div>
        <div className="flex flex-row justify-center mt-16">
          <div className="flex flex-col item-center gap-2">
            <h1 className="text-xs text-white">Discover more</h1>
            <img src={scroll} className="w-5"></img>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------------------------*/}

      <div className=" flex flex-row justify-center ">
        <div>
          <div className="flex flex-col">
            <h1 className="w-28 p-1 text-sm font-bold text-green-950 bg-green-400 ">
              What we offer
            </h1>
            <br />
            <h1 className="w-[850px] text-4xl font-medium	">
              We offer a comprehensive suite of services designed to meet your
              every need in the realm of embedded product engineering and
              development.{" "}
            </h1>
            <br />
            <h1 className="text-xl">
              Here's a detailed look at what we bring to the table:
            </h1>
          </div>
          <div>jikkkkkkkkkkkkkkk</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
