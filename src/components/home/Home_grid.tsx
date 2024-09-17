// import React from "react";
import Home_8box from "./Home_8box";

import green_arrow from "../../assets/Group.svg";

function Home_grid() {
  return (
    <div className=" flex flex-row justify-center mt-16">
      <div className="grid gap-16">
        <div className="flex flex-col">
          <h1 className="w-28 p-1 text-sm font-bold text-green-950 bg-green-400 ">
            What we offer
          </h1>
          <br />
          <h1 className="lg:w-[850px] w-[615px] lg:text-4xl text-2xl font-medium	">
            We offer a comprehensive suite of services designed to meet your
            every need in the realm of embedded product engineering and
            development.{" "}
          </h1>
          <br />
          <h1 className="lg:text-xl text-lg">
            Here's a detailed look at what we bring to the table:
          </h1>
        </div>
        <div className="flex flex-row justify-center">
        {/*-------------------------------------------------------------------------------------------------------------*/}
        <Home_8box />
        {/*----------------------------------------------------------------------------------------------------------------------------------- */}
        </div>
        <div className="flex flex-col">
          <h1 className="w-20 p-1 text-sm font-bold text-green-950 bg-green-400 ">
            About us
          </h1>
          <br />
          <h1 className="lg:w-[850px] w-[615px] lg:text-4xl text-2xl font-medium 	">
            <span className="font-normal">At Gyansamhita</span> , we love
            technology and are driven by passion and innovation that improves
            our customer’s operations.
          </h1>
          <br />
          <h1 className="lg:w-[850px] w-[550px] lg:text-xl text-lg ">
            There’s so much we start adding up in terms of value, only to
            achieve the aforesaid. Over the last 10 years of our successful
            stint in the industry, headquartered in Bangalore and operating from
            Hyderabad, India. The company has a proven track record in
            delivering Embedded Software and System Solutions that provide a
            competitive edge to clients and partners.
          </h1>
          <br />
          <div className="flex flex-row gap-3">
            <h1 className="text-xl font-medium	">Learn More</h1>
            <img src={green_arrow} className="w-8"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_grid;
