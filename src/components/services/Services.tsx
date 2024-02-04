import React from "react";
import Navbar from "../Navbar/Navbar";
import icon from "../../assets/sample_icon.svg";
import green_arrow from "../../assets/Group.svg";
import check from "../../assets/ic_check.svg";

function Services(){
return(
    <div>
        <Navbar color="black"/>
        <div className="flex flex-row justify-around mt-8">
            <div className=" bg-slate-500 flex flex-col gap-4">
<img src={icon} className="w-14"/>
<h1 className="text-5xl	">Embedded system Solutions</h1>
<h1 className="w-[500px] text-lg">We craft embedded applications tailored to diverse market needs, ensuring that your products are always ahead of the curve.</h1>
<div className="flex flex-row gap-3">
<h1 className="text-xl font-medium">
Join our Team
</h1><img src={green_arrow} className="w-11"/>
</div>
            </div>

            <div>
           <h1 className="font-medium text-2xl">Board Support Package Development   </h1> 
            <div className="flex flex-row bg-slate-600 mt-20">
<div className="flex flex-col">
    <div className="flex">
        <img src={check}/>
    <h1>Bootloader and Linux kernel porting</h1>
    </div>
    <div className="flex">
        <img src={check}/>
        <h1>Custom device driver development</h1>
    </div>
    <div className="flex">
        <img src={check}/>
        <h1>Root file system building</h1>
    </div>
          
</div>
<div className="flex flex-col">

<div className="flex">
        <img src={check}/>
        <h1>Boot time optimization</h1>
    </div>
    <div className="flex">
        <img src={check}/>
        <h1>Turnkey product design and release</h1>
    </div>
</div>
            </div>
           
            </div>
        </div>
    </div>
);
}

export default Services;