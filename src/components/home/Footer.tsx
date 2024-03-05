import React from "react";
import home_mail from "../../assets/home_footer/ic_mail.svg";
import home_call from "../../assets/home_footer/ic_call.svg";
import linkedin from "../../assets/home_contact/Linkedin.svg";
import twitter from "../../assets/home_contact/Twitter.svg";

function Footer() {
  return (
    <div className="bg-[#004642] text-white mt-16 pt-16">
      <div className="flex flex-row justify-around pb-16 ">
        <div className="w-64 flex flex-col gap-5">
          <h1 className="text-sm text-[#FFFFFF99]">
            “Our mission is to provide the highest business value to our
            customers and live by a value-focused, technology centered
            organization.”
          </h1>
          <div className="flex gap-2">
            <img src={home_mail} className="w-5" />
            <h1 className="text-sm">hr@gytechs.com</h1>
          </div>
          <div className="flex gap-2">
            <img src={home_call} className="w-5" />
            <h1 className="text-sm">+91 40 40177887</h1>
          </div>
        </div>
        <div className="flex flex-row gap-16">
          <div >
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Company</li>
              <div className="text-sm text-[#FFFFFF99] flex flex-col gap-4">
                {" "}
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </div>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="font-bold	">Services</li>
              <div className="text-sm text-[#FFFFFF99] flex flex-col gap-4">
                <li>Embedded system solutions</li>
                <li>Storage solutions</li>
                <li>Internet of things</li>
                <li>Quality assurance</li>
                <li>Android platform solution</li>
                <li>AI solutions</li>
                <li>SOC bring-up & system</li>
                <li>IP validation</li>
                <li>Hardware design</li>
              </div>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              <li className="font-bold	">Discover</li>
              <div className="text-sm text-[#FFFFFF99] flex flex-col gap-4">
                <li>FAQs</li>
                <li>Testimonials</li>
                <li>Employee Portal</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
<div className="h-24 flex flex-col justify-center  border-t-2 border-[#FFFFFF99]">
<div className="flex flex-row justify-evenly">
        <div className="text-sm text-[#FFFFFF99] flex flex-row  lg:gap-20 gap-3">
<h1>Copyright © 2023 Gytech. All Rights Reserved.</h1>
<h1>Terms of Service</h1>
<h1>Privacy Policy</h1>
<h1>Cookies</h1>
        </div>
        <div className="flex flex-row gap-4">
<img src={twitter} className="w-7"/>
<img src={linkedin} className="w-7"/>
        </div>
      </div>
</div>
      
    </div>
  );
}

export default Footer;
