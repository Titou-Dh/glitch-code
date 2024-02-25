"use client"
import React from 'react';
import Countdown from '../components/Countdown';

const App = () => {

  const targetTime = new Date();
  targetTime.setUTCHours(17);
  targetTime.setUTCMinutes(30);
  targetTime.setUTCSeconds(0);

  return (
    <div className="App">
      <h1>Countdown Before the Glitch hackathon</h1>
      <Countdown targetTime={targetTime} />
    </div>
  );
};

export default App;
