import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (Object.keys(newTimeLeft).length === 0) {
        setCompleted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className={`countdown `}>
      {completed ? <Link href="/get_assets" className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-7 text-xl py-5 text-center me-2  mb-2'>Get Assets</Link> : <div className='font-bold text-9xl '>`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`</div>}
    </div>
  );
};

export default Countdown;
