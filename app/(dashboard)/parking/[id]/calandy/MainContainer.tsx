"use client"

import { useContext, useEffect, useState } from "react";
import { IoEarthSharp } from "react-icons/io5";
import { UserContext } from "@/context/userContext";

import  Details  from "@/components/Details"

import SetCalander from "@/components/SetCalander";
import SetTime from "@/components/SetTime";
import Form from "@/components/Form";



export default function SchedulePage(userinfo:any, bookingInfo:any) {
    const { showForm } = useContext<any>(UserContext);
    return (
    <div className='w-full h-full  flex items-center flex-col '>
      
      {!showForm ? (
          <>
      <div className='flex items-center flex-col mt-4 w-[1000px] ml-[140px] border-b-2 border-t shadow-md rounded-lg '>
        
            <div className='grid grid-cols-10 gap-1'>
              
              <div className='col-span-5'>
              <div className='flex flex-col gap-10'>
              <div className='flex items-center justify-start mt-6'>
        <h1 className='font-bold text-gray-700 font-sans text-xl'>Select a Date & Time</h1>
      </div>
              <div className=' p-3'>
              <SetCalander />
               
              </div>
              </div>
              </div>
              <div className='col-span-5'>
                <div className=''>
                  <SetTime user ={userinfo} bookingInfo ={bookingInfo} />
                </div>
              </div>
            </div>
            
            </div>
          </>
        ) : (
          <>
           <div className='flex items-center flex-col mt-4 w-[1020px] ml-[120px] bg-white border-b-2 border-t shadow-md rounded-lg  p-5'>
            <div className='grid grid-cols-10 gap-2'>
              <div className='col-span-5'>
               <Details/>
              </div>
              <div className='col-span-5'>
              <Form user ={userinfo}/>
              </div>
            </div>
           </div>
          </>
          
        )}
      
    </div>
      );
}