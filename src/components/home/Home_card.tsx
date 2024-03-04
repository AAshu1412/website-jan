import React from "react";
import star from "../../assets/Star.svg";
import girl from "../../assets/girl.svg";

import google from "../../assets/brands/Google.svg";
import atlassian from "../../assets/brands/Atlassian.svg";
import amazon from "../../assets/brands/Amazon.svg";
import canon from "../../assets/brands/Canon.svg";
import wlmart from "../../assets/brands/Walmart.svg";

function Home_card(props:any) {
  return (
    <div className=" flex flex-row justify-center mt-16 bg-slate-200	lg:py-16 py-8 bg-orange-400" style={{marginTop:props.about_margin}}>
      <div className="lg:w-[1020px] w-[639px] flex flex-col" style={{width:props.about_width}}>
        <h1 className="w-24 p-1 text-sm font-bold text-green-950 bg-green-400 ml-3 lg:ml-0">
          Testimonials{" "}
        </h1>
        <br />
        <h1 className="lg:w-[850px] w-[600px] lg:text-4xl text-3xl font-medium ml-3 lg:ml-0">
          What people are saying
        </h1>
        <br />
        <div className=" flex flex-row justify-center lg:gap-6 gap-4 px-3  lg:px-0  ">
          <div className="w-72 box-border rounded-xl	bg-slate-100 lg:p-5 py-5 px-3 grid gap-3">
            <div className="lg:pl-3">
              <img src={star}></img>
            </div>
            <div className="grid lg:gap-7 gap-4">
              <h1 className=" lg:text-xl font-medium">
                "Easily the best project management software on the market,
                right now. We became 2x faster and more efficient after adopting
                Projectile.{" "}
              </h1>
              <div className="flex flex-row gap-2">
                <img src={girl} className="w-8"></img>
                <div className="flex flex-col text-xs justify-center">
                  <h1 className="font-bold	">Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 box-border rounded-xl	bg-slate-100 lg:p-5 py-5 px-3 grid gap-3 ">
            <div className="lg:pl-3">
              <img src={star}></img>
            </div>
            <div className="grid lg:gap-7 gap-4">
              <h1 className=" lg:text-xl font-medium	">
                "Easily the best project management software on the market,
                right now. We became 2x faster and more efficient after adopting
                Projectile.{" "}
              </h1>
              <div className="flex flex-row gap-2">
                <img src={girl} className="w-8"></img>
                <div className="flex flex-col text-xs justify-center">
                  <h1 className="font-bold	">Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 box-border rounded-xl	bg-slate-100 lg:p-5 py-5 px-3 grid gap-3">
            <div className="lg:pl-3">
              <img src={star}></img>
            </div>
            <div className="grid lg:gap-7 gap-4">
              <h1 className=" lg:text-xl font-medium">
                "Easily the best project management software on the market,
                right now. We became 2x faster and more efficient after adopting
                Projectile.{" "}
              </h1>
              <div className="flex flex-row gap-2">
                <img src={girl} className="w-8"></img>
                <div className="flex flex-col text-xs justify-center">
                  <h1 className="font-bold	">Cornelia Carter</h1>
                  <h1>Senior Marketing Manager</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        
        <div className="lg:w-[1077px] w-[600px] bg-slate-100 box-border flex flex-row justify-between py-9 lg:px-14 px-8 ml-5 lg:ml-0">
          <h1 className="w-20 lg:w-auto text-[#808991]">Trusted by industry leaders</h1>
          <img src={google} className="w-20 lg:w-auto" />
          <img src={atlassian} className="w-20 lg:w-auto"/>
          <img src={amazon} className="w-20 lg:w-auto"/>
          <img src={canon} className="w-20 lg:w-auto"/>
          <img src={wlmart} className="w-20 lg:w-auto" />
        </div>
       
      </div>
    </div>
  );
}

export default Home_card;
