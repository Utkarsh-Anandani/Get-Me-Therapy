// src/components/AnalogClock.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import ShareButton from './ShareButton';

const AnalogClock = ({ speed }) => {
  const query = new URLSearchParams(useLocation().search);
  const initialTime = query.get('time') ? new Date(query.get('time')) : new Date();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => new Date(prevTime.getTime() - 1000 * speed));
    }, 1000);

    return () => clearInterval(interval);
  }, [speed, time]);

  return (
    <div>
      <div className='flex items-center justify-center mb-5'><Clock value={time} /></div>
      <ShareButton speed={speed} time={time} />
    </div>
  );
};

export default AnalogClock;



