"use client"
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownPage = () => {
  const eventTime = new Date(); // Initialize with current date
  eventTime.setHours(23); // Set the hour (0-23)
  eventTime.setMinutes(59); // Set the minute (0-59)
  eventTime.setSeconds(0); // Set the second (0-59)

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventTime - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  return (
    <div className="container">
      <h1>Download Countdown App</h1>
      <div className="countdown-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={eventTime - new Date()}
          colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
          onComplete={() => [<span>Event has started!</span>]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <button>Download File</button>
    </div>
  );
};

export default CountdownPage;
