import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import AnalogClock from '../components/AnalogClock';
import SpeedSlider from '../components/SpeedSlider';

const Tracking = () => {
    const query = new URLSearchParams(useLocation().search);
    const initialSpeed = query.get('speed') ? parseFloat(query.get('speed')) : 1;
    const [speed, setSpeed] = useState(initialSpeed);
    const [quote, setquote] = useState('If newspapers were a baseball team, they would be the Mets - without the hope for those folks at the very pinnacle of the financial food chain - who average nearly $24 million a year in income - next year.');


    const category = 'food';

    const getQuote = async () => {
        const a = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'Uw23d9aL6IPQw+1Jm6l14Q==PKIvftRvGPUoWKfb',
                'Content-Type': 'application/json'
            }
        })

        const response = await a.json();
        setquote(response[0].quote);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            getQuote();
        }, 5000);

        return () => clearInterval(interval);
    }, [quote]);


    


    return (
        <div className='w-full h-screen text-black text-left py-14 px-5'>
            <h1 className='text-4xl font-semibold text-black'>Track your <br /> orders.</h1>
            <p className='text-gray-600 text-base mb-11'>Don&apos;t be impatient, track your orders...</p>
            <div className='flex flex-col gap-5 justify-center items-center text-center'>
                <AnalogClock speed={speed} />
                <SpeedSlider speed={speed} setSpeed={setSpeed} />
            </div>
            <h1 className='text-xl font-semibold text-[#FE8C00] mt-7'>Once a Foodie said...</h1>
            <div className='w-full text-center mt-2'>
                <p className='text-[#FE8C00] text-3xl font-bold'>"<span className='text-gray-600 text-lg font-semibold'>{quote ? quote : ''}</span>"</p>
            </div>
        </div>
    )
}

export default Tracking

//Uw23d9aL6IPQw+1Jm6l14Q==PKIvftRvGPUoWKfb
