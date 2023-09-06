"use client"

import React, { useContext } from 'react';
import { AiOutlineArrowLeft,AiOutlineClockCircle, AiOutlineSave } from 'react-icons/ai';
import {IoEarthOutline } from "react-icons/io5";
import {BiMessageDetail} from "react-icons/bi";
// import { hotel, chair } from '../assets';
import { UserContext } from '@/context/userContext';

const Details = () => {
    const { setShowForm } = useContext<any>(UserContext);
    const handleNextButtonClick = () => {
        // Show the form and hide the calendar
        setShowForm(false);
      };
  return (
    <div className='flex  flex-col w-[450px] gap-3 bg-white  border-r-2 p-4'>
      <div className='flex justify-start'>
        <div className='border-2 rounded-full p-3'>
          <AiOutlineArrowLeft className='text-3xl text-sky-700 cursor-pointer' onClick={handleNextButtonClick} />
        </div>
      </div>
      <div className='flex items-center justify-start ml-4'>
        <img src="" alt='' className='w-1/2 h-1/2 object-contain ml-3' />
      </div>

      <div className='mt-2 flex items-center ml-4 justify-start'>
        <h1 className='text-2xl font-bold'>Book you Parking</h1>
      </div>
       <div className='flex items-center ml-4 mt-2 justify-start'>
        <AiOutlineClockCircle  className='text-2xl cursor-pointer text-slate-600 '/>
        <span className='text-base ml-3 font-semibold text-slate-600'>
        30 min
        </span>
         
      
       </div>

       <div className='flex items-center ml-4 mt-2 justify-start'>
        <BiMessageDetail  className='text-5xl cursor-pointer text-slate-600'/>
        <span className='text-base ml-3 font-semibold text-slate-600'>
        Please note that
        online reservation requests
        must be made 24 hours in advance.
        </span>
         
      
       </div>

       <div className='flex items-center ml-4 mt-2 justify-start'>
        <AiOutlineSave className='text-3xl cursor-pointer text-slate-600'/>
        <div className='flex flex-col items-center justify-center'> 
        <div className='text-base ml-3 font-semibold text-slate-600'>
        Mon -  Sun.  9.00 - 23.00 
        </div>
        
        </div>
         
      
       </div>

       <div className='flex items-center ml-4 mt-2 justify-start'>
        <IoEarthOutline className='text-3xl cursor-pointer text-slate-600'/>
        <span className='text-base ml-3 font-semibold text-slate-600'>
        Indian Standard Time
        </span>
         
      
       </div>

       <div className='flex items-center ml-4 mt-2 justify-start'>
        
        <p className='text-base ml-3 font-semibold text-slate-600'>
        Reservation confirmed! Your slot is booked. Get ready for an unforgettable experience.
         We'll send you an impactful email notification before your reservation time, so you're always in the loop.
        </p>
         
      
       </div>

    </div>
  );
};

export default Details;
