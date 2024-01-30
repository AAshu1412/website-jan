import React from "react";
import star from "../../assets/Star.svg";
import girl from "../../assets/girl.svg";

import google from "../../assets/brands/Google.svg";
import atlassian from "../../assets/brands/Atlassian.svg";
import amazon from "../../assets/brands/Amazon.svg";
import canon from "../../assets/brands/Canon.svg";
import wlmart from "../../assets/brands/Walmart.svg";

function Home_card() {
  return (
    <div className=" flex flex-row justify-center mt-16 bg-slate-200	py-16">
      <div className="w-[1020px] flex flex-col ">
        <h1 className="w-24 p-1 text-sm font-bold text-green-950 bg-green-400 ">
          Testimonials{" "}
        </h1>
        <br />
        <h1 className="w-[850px] text-4xl font-medium 	">
          What people are saying
        </h1>
        <br />
        <div className=" flex flex-row justify-center gap-6">
          <div className="w-72 box-border rounded-xl	bg-slate-100 p-5 grid gap-3 ">
            <div className="pl-3">
              <img src={star}></img>
            </div>
            <div className="grid gap-7">
              <h1 className=" text-xl	">
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
          <div className="w-72 box-border rounded-xl	bg-slate-100 p-5 grid gap-3 ">
            <div className="pl-3">
              <img src={star}></img>
            </div>
            <div className="grid gap-7">
              <h1 className=" text-xl	">
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
          <div className="w-72 box-border rounded-xl	bg-slate-100 p-5 grid gap-3 ">
            <div className="pl-3">
              <img src={star}></img>
            </div>
            <div className="grid gap-7">
              <h1 className=" text-xl	">
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
        <div className="w-[1077px] bg-slate-100 box-border flex flex-row justify-between py-9 px-14">
          <h1 className="text-[#808991]">Trusted by industry leaders</h1>
          <img src={google} />
          <img src={atlassian} />
          <img src={amazon} />
          <img src={canon} />
          <img src={wlmart} />
        </div>
      </div>
    </div>
  );
}

export default Home_card;
