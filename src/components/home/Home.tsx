import React from "react";
import Home_top from "./Home_top";
import Home_grid from "./Home_grid";
import Home_card from "./Home_card";
import Home_dropDown from "./Home_dropDown";

function Home() {
  return (
    <div>
      <Home_top />
      <Home_grid />
      <Home_card />
      <Home_dropDown/>
    </div>
  );
}

export default Home;
