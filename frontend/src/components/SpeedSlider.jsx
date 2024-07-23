// src/components/SpeedSlider.js
import React from 'react';

const SpeedSlider = ({ speed, setSpeed }) => {
  const handleSliderChange = (event) => {
    setSpeed(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min="1"
        max="20"
        step="1"
        value={speed}
        onChange={handleSliderChange}
      />
      <p className='text-lg text-gray-600 font-semibold'>Speed: <span className='text-lg text-[#FE8C00] font-semibold'>{speed}x</span></p>
    </div>
  );
};

export default SpeedSlider;
