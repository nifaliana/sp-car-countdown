import React, { useEffect, useState } from 'react';
import './App.css';
import TimerCard from './components/TimerCard';

export interface ICountdown {
  days: number;
  hours: number;
  min: number;
  sec: number;
}

function App() {
  const [countDown, setCountDown] = useState<ICountdown>();

  const calculateCountdown = (endDate: Date) => {
    const timeLeft: ICountdown = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };

    let delta = Math.abs(endDate.getTime() - new Date().getTime()) / 1000;

    timeLeft.days = Math.floor(delta / 86400);
    delta -= timeLeft.days * 86400;

    timeLeft.hours = Math.floor(delta / 3600) % 24;
    delta -= timeLeft.hours * 3600;

    timeLeft.min = Math.floor(delta / 60) % 60;
    delta -= timeLeft.min * 60;

    timeLeft.sec = delta % 60;

    return timeLeft;
  };

  useEffect(() => {
    setInterval(() => {
      const date = calculateCountdown(new Date(2022, 7, 1));
      setCountDown(date);
    }, 1000);

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <div className="container">
      <h1>Fotoana mbola ananantsika mandrapiverin'ny Car @ Juillet</h1>
      {countDown ? (
        <div className="countdown_wrapper">
          <TimerCard value={countDown?.days} label="Andro" />
          <TimerCard value={countDown?.hours} label="Ora" />
          <TimerCard value={countDown?.min} label="Minitra" />
          <TimerCard value={Math.round(countDown?.sec)} label="Segondra" />
        </div>
      ) : (
        <span>Miandry kely...</span>
      )}
    </div>
  );
}

export default App;
