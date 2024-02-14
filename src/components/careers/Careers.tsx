import React from "react";
import Navbar from "../Navbar/Navbar";

function Careers() {
  return (
    <div>
      <Navbar color="black" button_color="#507A56" button_text="white" />

      <div className="flex flex-col">
        <h1 className="text-xl">We’re Hiring!</h1>
        <h1 className="font-medium text-4xl">Open Positions</h1>
      </div>
    </div>
  );
}

export default Careers;
