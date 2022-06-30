import React, { useEffect, useState } from 'react';
import './App.css';

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
      const date = calculateCountdown(new Date(2022, 7, 1,0,0,0));
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
           <img style={{width: 200, height: 200}} alt='LH' src='https://scontent.ftmm1-1.fna.fbcdn.net/v/t39.30808-6/290241944_1272339156903295_465679546326165014_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFuh8ECRLx3AaGIZL3VJ6wfZwESSxJUeX1nARJLElR5fZfxVd9BmEcDvDhk7sJKDvHXdVzrJrvXSCCBbxNVASJj&_nc_ohc=maVlFhy9mykAX-x4PJU&_nc_zt=23&_nc_ht=scontent.ftmm1-1.fna&oh=00_AT_602D_GNX60LP9nmX_eLWayYOlDjGN29e3yxFP6E617g&oe=62C2B703'/>
        </div>
      ) : (
        <span>Miandry kely...</span>
      )}
    </div>
  );
}

export default App;
