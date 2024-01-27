import React from "react";
import arrow from "../assets/arrow.svg";
import scroll from "../assets/scroll.svg";
import icon from "../assets/sample_icon.svg";
import arrow2 from "../assets/ic_arrow.svg";
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
          {/*-------------------------------------------------------------------------------------------------------------*/}
          <div className="grid grid-cols-4 gap-10">
            <div className="w-auto border-solid border-orange-500 border-2		">
              <img src={icon} />
              <div className="w-60">
                <h1 className="font-bold text-xl bg-slate-600">
                  Embedded system Solutions
                </h1>
                <h1 className="bg-pink-600">
                  We craft embedded applications tailored to diverse market
                  needs, ensuring that your products are always ahead of the
                  curve.
                </h1>
                <div className="flex flex-row bg-yellow-500 gap-3">
                  {" "}
                  <h1 className="text-sm	font-bold	text-green-800">
                    Learn More{" "}
                  </h1>
                  <img src={arrow2} className="w-4" />
                </div>
              </div>
            </div>
            <div>
              <img src={icon} />
              <h1>Storage Solutions</h1>
              <h1 className="w-64">
              From SSD firmware to PCIe fabric-based storage chassis and system management software, our solutions are designed for speed, reliability, and scalability.
              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>Internet of Things</h1>
              <h1 className="w-64">
              From SSD firmware to PCIe fabric-based storage chassis and system management software, our solutions are designed for speed, reliability, and scalability.
              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>Quality Assurance</h1>
              <h1 className="w-64">
              From SSD firmware to PCIe fabric-based storage chassis and system management software, our solutions are designed for speed, reliability, and scalability.
              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>Android Platform Solutions</h1>
              <h1 className="w-64">
              We harness the power of the Android platform to develop advanced products that resonate with your target audience.
              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>AI Solutions for the Future</h1>
              <h1 className="w-64">
              We provide End to end system level work for AI platform and help you leverage the power of AI to stay competitive and innovative.              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>SoC bring-up & system level IP validation</h1>
              <h1 className="w-64">
              Porting Linux Kernel/RTOS. Pre & Post Silicon IP validation (Customer FPGA/reference platform)
              </h1>
              <h1>Learn More</h1>
            </div>
            <div>
              <img src={icon} />
              <h1>Hardware design</h1>
              <h1 className="w-64">
              We provide End to end system level work for AI platform and help you leverage the power of AI to stay competitive and innovative.
              </h1>
              <h1>Learn More</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
