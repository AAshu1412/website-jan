import React from "react";
import Navbar from "../Navbar/Navbar";
import about_top from "../../assets/image 4.png";

function About() {
  return (
    <div>
      <Navbar color="black" button_color="#507A56" button_text="white" />
      <img src={about_top} className="w-full" />
      <div className="flex flex-col gap-10 bg-orange-500 py-12 pl-40">
        <h1 className="font-medium text-3xl	 w-[710px]">
          <span className="font-normal">At Gyansamhita</span>, we love
          technology and are driven by passion and innovation that improves our
          customer’s operations.{" "}
        </h1>
        <h1 className="w-[800px] text-xl">
          There’s so much we start adding up in terms of value, only to achieve
          the aforesaid. Over the last 10 years of our successful stint in the
          industry, headquartered in Bangalore and operating from Hyderabad,
          India. The company has a proven track record in delivering Embedded
          Software and System Solutions that provide a competitive edge to
          clients and partners.
        </h1>
      </div>
    </div>
  );
}

export default About;
