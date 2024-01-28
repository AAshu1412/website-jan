import React from "react";
import arrow from "../assets/arrow.svg";
import scroll from "../assets/scroll.svg";
import icon from "../assets/sample_icon.svg";
import arrow2 from "../assets/ic_arrow.svg";
import green_arrow from "../assets/Group.svg";
import star from "../assets/Star.svg";
import girl from "../assets/girl.svg";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <div className="bg-background bg-no-repeat bg-cover h-[600px] box-border">
        <Navbar />
        <div className="w-[875px] ml-24 mt-16 flew flex-col  ">
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
          <div className="grid grid-cols-1 gap-2 ">
            <h1 className="text-xs text-white">Discover more</h1>
            <div className="flex justify-center">
              {" "}
              <img src={scroll} className="w-5"></img>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------------------------------------------------------------------------------*/}

      <div className=" flex flex-row justify-center mt-16 ">
        <div className="grid gap-16">
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
          {/*-------------------------------------------------------------------------------------------------------------*/}
          <div className="grid grid-cols-4 gap-4">
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">
                  Embedded system Solutions
                </h1>
                <h1>
                  We craft embedded applications tailored to diverse market
                  needs, ensuring that your products are always ahead of the
                  curve.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">Storage Solutions</h1>
                <h1>
                  From SSD firmware to PCIe fabric-based storage chassis and
                  system management software, our solutions are designed for
                  speed, reliability, and scalability.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">Internet of Things </h1>
                <h1>
                  From SSD firmware to PCIe fabric-based storage chassis and
                  system management software, our solutions are designed for
                  speed, reliability, and scalability.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">Quality Assurance </h1>
                <h1>
                  From SSD firmware to PCIe fabric-based storage chassis and
                  system management software, our solutions are designed for
                  speed, reliability, and scalability.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">
                  Android Platform Solutions
                </h1>
                <h1>
                  We harness the power of the Android platform to develop
                  advanced products that resonate with your target audience.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">
                  AI Solutions for the Future{" "}
                </h1>
                <h1>
                  We provide End to end system level work for AI platform and
                  help you leverage the power of AI to stay competitive and
                  innovative.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid  border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">
                  SoC bring-up & system level IP validation{" "}
                </h1>
                <h1>
                  We provide End to end system level work for AI platform and
                  help you leverage the power of AI to stay competitive and
                  innovative.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div className="w-auto box-border border-solid border-2 grid gap-2 ">
              <img src={icon} />
              <div className="w-60 grid gap-2">
                <h1 className="font-bold text-xl ">Hardware design</h1>
                <h1>
                  We provide End to end system level work for AI platform and
                  help you leverage the power of AI to stay competitive and
                  innovative.
                </h1>
                <div className="flex flex-row  gap-3">
                  {" "}
                  <h1 className="text-sm font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
          </div>
          {/*----------------------------------------------------------------------------------------------------------------------------------- */}
          <div className="flex flex-col">
            <h1 className="w-20 p-1 text-sm font-bold text-green-950 bg-green-400 ">
              About us
            </h1>
            <br />
            <h1 className="w-[850px] text-4xl font-medium 	">
              <span className="font-normal">At Gyansamhita</span> , we love
              technology and are driven by passion and innovation that improves
              our customer’s operations.
            </h1>
            <br />
            <h1 className="w-[850px] text-xl ">
              There’s so much we start adding up in terms of value, only to
              achieve the aforesaid. Over the last 10 years of our successful
              stint in the industry, headquartered in Bangalore and operating
              from Hyderabad, India. The company has a proven track record in
              delivering Embedded Software and System Solutions that provide a
              competitive edge to clients and partners.
            </h1>
            <br />
            <div className="flex flex-row gap-3">
              <h1 className="text-xl font-medium	">Learn More</h1>
              <img src={green_arrow} className="w-8"></img>
            </div>
          </div>
          {/*-------------------------------------------------------------------------------------------------------- */}
          <div className="flex flex-col">
            <h1 className="w-24 p-1 text-sm font-bold text-green-950 bg-green-400 ">
            Testimonials            </h1>
            <br />
            <h1 className="w-[850px] text-4xl font-medium 	">
            What people are saying
            </h1>
            <br />
           <div className="bg-pink-500 grid grid-cols-3 ">
            <div className="grid ">
               <div><img src={star}></img></div>
               <h1 className="w-48">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. </h1>
               <div>
                <img src={girl}></img>
                <div>
                  <h1>Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
               </div>
            </div>
            <div>
               <div><img src={star}></img></div>
               <h1 className="w-48">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. </h1>
               <div>
                <img src={girl}></img>
                <div>
                  <h1>Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
               </div>
            </div>
            <div>
               <div><img src={star}></img></div>
               <h1 className="w-48">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. </h1>
               <div>
                <img src={girl}></img>
                <div>
                  <h1>Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
               </div>
            </div>
           </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
