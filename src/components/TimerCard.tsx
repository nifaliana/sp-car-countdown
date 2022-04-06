import React from 'react';
import './TimerCard.css';

export interface ITimerCard {
  value: number;
  label: string;
}

const TimerCard = ({ value, label }: ITimerCard) => {
  return (
    <div className="timerCard">
      <p className="timerCard__value">{value >= 9 ? value : `0${value}`}</p>
      <span className="timerCard__label">{label}</span>
    </div>
  );
};

export default TimerCard;
