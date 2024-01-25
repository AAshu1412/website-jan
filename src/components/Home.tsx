import React from 'react';
import arrow from "../assets/arrow.svg";
import Navbar from './Navbar';

function Home() {

  return (
    <div  >
      <div className="bg-background bg-no-repeat bg-cover h-[600px] box-border"  >
      <Navbar/> 
      <div className='w-[875px]  ml-24 mt-16 flew flex-col   '> {/*h-80 bg-slate-500 bg-yellow-600 bg-orange-800*/}
      <h1 className='text-white	   text-6xl font-light	'>A one-stop Solution Provider for <span className='font-bold	'>embedded product engineering and development</span></h1><br/>
      <h1 className=' w-[675px] text-white font-normal text-xl'>We are committed to provide the highest business value to our customers and lives by a value-focused, technology centred organisation.</h1><br/>
      <h1 className='text-white bg-orange-800 font-medium flex flex-row gap-10'>Contact Us <img src={arrow} className=''></img></h1>
      </div>
      </div>
    </div>
  )
}

export default Home
