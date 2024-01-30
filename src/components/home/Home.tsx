import React from "react";
import Home_top from "./Home_top";
import Home_grid from "./Home_grid";
import Home_card from "./Home_card";
import Home_dropDown from "./Home_dropDown";
import Home_contact from "./Home_contact";

function Home() {
  return (
    <div>
      <Home_top />
      <Home_grid />
      <Home_card />
      <Home_dropDown/>
      <Home_contact/>
    </div>
  );
}

export default Home;
