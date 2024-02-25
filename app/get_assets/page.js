"use client"
import React, { useState, useEffect } from 'react';
import Countdown from '../../components/Countdown';

const Page = () => {
  const [isHidden, setIsHidden] = useState(false);
  const targetTime = new Date();
  targetTime.setUTCHours(16);
  targetTime.setUTCMinutes(0);
  targetTime.setUTCSeconds(0);

  const handleDownload = () => {
    const fileUrl = '/downloads/Glitch-code.zip';
    const fileName = 'Glitch-code.zip';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const currentDate = new Date();
    const isPastTargetTime = currentDate > targetTime;

    if (isPastTargetTime) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-full pt-44'>
      <h3>Remaining Time :</h3>
      <Countdown targetTime={targetTime} text='time is over' done={true} />
      {!isHidden && (
        <>
          <p>you can download the assets by clicking the button below</p>
          <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-7 py-5 text-center me-2 mb-2' onClick={handleDownload}>Download Assets</button>
        </>
      )}
    </div>
  );
};

export default Page;
