import React from 'react';
// import background from "../assets/BG.png";
import Navbar from './Navbar';

function Home() {

  return (
    <div  >
      <div className="bg-background bg-no-repeat bg-cover h-[600px] box-border"  >
      <Navbar/>
      <div className='pl-24 pt-16'>
      <h1 className='text-white	w-[945px] h-52 bg-slate-500 text-6xl font-light	'>A one-stop Solution Provider for <span className='font-bold	'>embedded product engineering and development</span></h1>
      <div>
      <h1>We are committed to provide the highest business value to our customers and lives by a value-focused, technology centred organisation.</h1>
    
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
