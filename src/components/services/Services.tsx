import React from "react";
import Navbar from "../Navbar/Navbar";
import icon from "../../assets/sample_icon.svg";
import green_arrow from "../../assets/Group.svg";
import check from "../../assets/ic_check.svg";
import services_bottom_img from "../../assets/image 1.png";
import gytechs from "../../assets/cropped-Gytechs-Logo 1.svg";

function Services() {
  return (
    <div>
      <Navbar color="black" button_color="#507A56" button_text="white" />
      <div className="flex flex-row justify-center gap-32 mt-8">
        <div className=" bg-slate-500 flex flex-col gap-4 ">       {/*h-[28vh] */}
          <img src={icon} className="w-14" />
          <h1 className="text-5xl	">Embedded system Solutions</h1>
          <h1 className="w-[500px] text-lg">
            We craft embedded applications tailored to diverse market needs,
            ensuring that your products are always ahead of the curve.
          </h1>
          <div className="flex flex-row gap-3">
            <h1 className="text-xl font-medium">Join our Team</h1>
            <img src={green_arrow} className="w-11" />
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="font-medium text-2xl">
                Board Support Package Development{" "}
              </h1>
              <div className="flex flex-row bg-yellow-600 mt-8 gap-10">
                <div className="flex flex-col gap-6 w-56">
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Bootloader and Linux kernel porting</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Custom device driver development</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Root file system building</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-56">
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Boot time optimization</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Turnkey product design and release</h1>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-medium text-2xl">Firmware Development </h1>
              <div className="flex flex-row bg-yellow-600 mt-8 gap-10">
                <div className="flex flex-col gap-6 w-56">
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>RTOS development</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Non-OS based embedded firmware</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>HAL Library development and Integration</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-60">
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Testing services</h1>
                  </div>
                  <div className="flex gap-3">
                    <img src={check} />
                    <h1>Migration of legacy firmware to new platforms</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={services_bottom_img} className="w-full mt-20"/>
      </div>
      <div className="flex flex-row justify-between px-40 py-4">
        <div>
          <img src={gytechs}/>
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

export default Services;
