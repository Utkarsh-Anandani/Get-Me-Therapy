// src/components/ShareButton.js
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const ShareButton = ({ speed, time }) => {
  const handleShareClick = () => {
    const url = `${window.location.origin}/tracking/?id=${uuidv4()}&speed=${speed}&time=${time.toISOString()}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard');
    });
  };

  return (
    <div className='flex items-center font-semibold text-lg gap-2'>
      Share live status of your delivery
      <button className='py-2 bg-[#FE8C00] rounded-3xl font-semibold text-white px-2' onClick={handleShareClick}>
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#ffffff" strokeWidth="2.0" />
          <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#ffffff" strokeWidth="2.0" />
        </svg>
      </button>
    </div>
  );
};

export default ShareButton;
