// import React from "react";
import Navbar from "../Navbar/Navbar";
import Home_card from "../home/Home_card";
import about_top from "../../assets/image 4.png";
import founder from "../../assets/Ganga_PNG_2.png";
import green_arrow from "../../assets/Group.svg";
import gytechs from "../../assets/cropped-Gytechs-Logo 1.svg";

function About() {
  return (
    <div>
      <Navbar color="black" button_color="#507A56" button_text="white" />
      <img src={about_top} className="w-full" />
      <div className="flex flex-col gap-10 py-12 pl-40">
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
      <div className="flex flex-row justify-center py-12">
        <div className="flex flex-col gap-8">
          <h1 className="w-24 p-2 font-bold text-sm text-[#004642] bg-green-400 box-border">
            OUR TEAM
          </h1>
          <h1 className="text-3xl font-medium">Founding Team</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-24">
              <img src={founder} className="rounded-full" />
              <div className="w-[750px] text-xl flex flex-col justify-center">
                <h1 className="font-bold">Founder</h1>
                <h1>
                  There’s so much we start adding up in terms of value, only to
                  achieve the aforesaid.
                </h1>
                <h1>
                  Over the last 10 years of our successful stint in the
                  industry, headquartered in Bangalore and operating from
                  Hyderabad, India. The company has a proven track record in
                  delivering Embedded Software and System Solutions that provide
                  a competitive edge to clients and partners.
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-24">
              <img src={founder} className="rounded-full" />
              <div className="w-[750px] text-xl flex flex-col justify-center">
                <h1 className="font-bold">Co-Founder</h1>
                <h1>
                  There’s so much we start adding up in terms of value, only to
                  achieve the aforesaid.
                </h1>
                <h1>
                  Over the last 10 years of our successful stint in the
                  industry, headquartered in Bangalore and operating from
                  Hyderabad, India. The company has a proven track record in
                  delivering.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12 px-60 flex flex-col items-center gap-12">
        <h1 className="text-3xl font-normal w-[1166px]">
          “Our mission is to provide the{" "}
          <span className="font-medium">
            highest business value to our customers{" "}
          </span>{" "}
          and live by a{" "}
          <span className="font-medium">
            value-focused, technology centered organization.”
          </span>
        </h1>
        <div className="flex flex-row justify-center mt-6">
          <div className="bg-slate-200 flex flex-row box-border p-8 justify-center gap-20 w-min">
            <h1 className="font-medium text-3xl">Careers</h1>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg w-[700px]">
                We believe it takes great people to make a great product. That’s
                why we hire not only the perfect professional fits, but people
                who embody our company values.
              </h1>
              <div className="flex flex-row items-center gap-4">
                <h1 className="text-xl font-medium">Join our Team</h1>
                <img src={green_arrow} className="w-12" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[1166px] gap-10">
          <h1 className="w-28 p-2 font-bold text-sm text-[#004642] bg-green-400 box-border">
            EXPERIENCE
          </h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-10">
              <h1 className="text-[#507A56] font-bold text-5xl	">20+ yrs</h1>
              <h1 className="text-2xl">20% of our team</h1>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[#507A56] font-bold text-5xl	">8+ yrs</h1>
              <h1 className="text-2xl">30% of our team</h1>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[#507A56] font-bold text-5xl	">6+ yrs</h1>
              <h1 className="text-2xl">30% of our team</h1>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-[#507A56] font-bold text-5xl	">3+ yrs</h1>
              <h1 className="text-2xl">20% of our team</h1>
            </div>
          </div>
        </div>
      </div>
      <Home_card about_margin={0} about_width={1166} />
      <div className="flex flex-row justify-between px-40 py-4">
        <div>
          <img src={gytechs} />
        </div>
        <div className="flex flex-row gap-16 items-center">
          <h1>Product</h1>
          <h1>Pricing</h1>
          <h1>Company</h1>
          <h1>Resources</h1>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between px-40 bg-[#201F1F] text-white h-24 items-center">
        <div>
          <h1>Copyright © 2023 Gytech. All Rights Reserved.</h1>
        </div>
        <div className="flex flex-row gap-10">
          <h1>Terms of Service</h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
