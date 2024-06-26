"use client"
import React from 'react';
import Countdown from '../components/Countdown';
import glitch_code from './assets/glitch_code.svg';
import Image from "next/image";

const App = () => {

  const targetTime = new Date();
  targetTime.setUTCHours(12);
  targetTime.setUTCMinutes(0);
  targetTime.setUTCSeconds(0);
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src={glitch_code} alt="Glitch Code" className='my-12'  width={450} />
      <Countdown targetTime={targetTime} text='' done={false} />
    </div>
  );
};

export default App;
