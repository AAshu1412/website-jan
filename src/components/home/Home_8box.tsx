import React from "react";
import icon from "../../assets/sample_icon.svg";
import arrow2 from "../../assets/ic_arrow.svg";

function Home_8box() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 lg:gap-y-12 gap-y-8">
      <div className="w-auto box-border border-solid border-white grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Embedded system Solutions</h1>
          <h1>
            We craft embedded applications tailored to diverse market needs,
            ensuring that your products are always ahead of the curve.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Storage Solutions</h1>
          <h1>
            From SSD firmware to PCIe fabric-based storage chassis and system
            management software, our solutions are designed for speed,
            reliability, and scalability.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Internet of Things </h1>
          <h1>
            From SSD firmware to PCIe fabric-based storage chassis and system
            management software, our solutions are designed for speed,
            reliability, and scalability.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Quality Assurance </h1>
          <h1>
            From SSD firmware to PCIe fabric-based storage chassis and system
            management software, our solutions are designed for speed,
            reliability, and scalability.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Android Platform Solutions</h1>
          <h1>
            We harness the power of the Android platform to develop advanced
            products that resonate with your target audience.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">AI Solutions for the Future </h1>
          <h1>
            We provide End to end system level work for AI platform and help you
            leverage the power of AI to stay competitive and innovative.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm	font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white  grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">
            SoC bring-up & system level IP validation{" "}
          </h1>
          <h1>
            We provide End to end system level work for AI platform and help you
            leverage the power of AI to stay competitive and innovative.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
      <div className="w-auto box-border border-solid border-white grid gap-2 ">
        <img src={icon} />
        <div className="w-60 grid gap-2">
          <h1 className="font-bold text-xl ">Hardware design</h1>
          <h1>
            We provide End to end system level work for AI platform and help you
            leverage the power of AI to stay competitive and innovative.
          </h1>
          <div className="flex flex-row  gap-3">
            {" "}
            <h1 className="text-sm font-bold	text-green-800">Learn More </h1>
            <img src={arrow2} className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_8box;
