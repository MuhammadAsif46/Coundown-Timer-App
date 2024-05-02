
import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const remainingTime = () => {
    const endDate = new Date("2024-06-01T00:00:00Z").getTime();
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference <= 0) {
      clearInterval(interval);
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(remainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(remainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl p-4 text-center mb-10 text-white">
        Countdown Timer App
      </h1>
      <div className="h-44 flex justify-center gap-5 items-center">
        <div>
          <div className="text-[#1eb9ff] shadow-2xl h-40 w-48 text-4xl flex items-center justify-center">
            {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
          </div>
          <div className="text-[#1eb9ff] border border-[#4b4a4d] p-2 text-center text-xl">
            Days
          </div>
        </div>
        <div>
          <div className="text-[#ff2972] shadow-2xl h-40 w-48 text-4xl flex items-center justify-center">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </div>
          <div className="text-[#ff2972] border border-[#4b4a4d] p-2 text-center text-xl">
            Hours
          </div>
        </div>
        <div>
          <div className="text-[#fee800] shadow-2xl h-40 w-48 text-4xl flex items-center justify-center">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </div>
          <div className="text-[#fee800] border border-[#4b4a4d] p-2 text-center text-xl">
            Minutes
          </div>
        </div>
        <div>
          <div className="text-[#04fc43] shadow-2xl h-40 w-48 text-4xl flex items-center justify-center">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </div>
          <div className="text-[#04fc43] border border-[#4b4a4d] p-2 text-center text-xl">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

