import React from "react";
import phone_call from "../../assets/home_contact/phone_call.svg";
import mail from "../../assets/home_contact/mail.svg";
import pin from "../../assets/home_contact/pin.svg";
import linkedin from "../../assets/home_contact/Linkedin.svg";
import twitter from "../../assets/home_contact/Twitter.svg";

function Home_contact() {
  return (
    <div className=" flex flex-row justify-center mt-16 	">
      <div className="w-[1020px] flex flex-col ">
        <h1 className="w-24  p-1 text-sm font-bold text-green-950 bg-green-400 ">
          Contact Us
        </h1>
        <br />
        <div className="flex flex-row justify-center gap-8">
          <div className="w-2/4 bg-pink-400">
            <h1 className="text-3xl font-medium ">Reach out through</h1>
            <div className="grid gap-8 p-10">
              <div className="flex flex-row gap-8">
                <img src={phone_call} />{" "}
                <div className="w-96 flex flex-col justify-center">
                  <h1>+91 40 40177887</h1>
                  <h1 className="text-[#1A191E80]">Support Number</h1>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <img src={mail} />
                <div className="w-96 flex flex-col justify-center">
                  <h1>hr@gytechs.com </h1>
                  <h1 className="text-[#1A191E80]">Support Email</h1>
                </div>
              </div>
              <div className="flex flex-row gap-8">
                <img src={pin} />
                <div className="w-96 flex flex-col justify-center">
                  <h1>
                    #318 A, 3rd Floor, Manjeera Majestic Commercial, JNTU to
                    Hitech City Road, Kukatpally, Hyderabad, Telangana, India.
                    Pin:500085
                  </h1>
                  <h1 className="text-[#1A191E80]">Address</h1>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2">
                  <img src={twitter} />{" "}
                  <h1 className="text-[#5F6368] text-xl flex flex-col justify-center">
                    Twitter
                  </h1>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={linkedin} />
                  <h1 className="text-[#5F6368] text-xl flex flex-col justify-center	">
                    LinkedIn
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/4 bg-blue-400">
            <h1 className="text-3xl font-medium">Get Started</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_contact;
