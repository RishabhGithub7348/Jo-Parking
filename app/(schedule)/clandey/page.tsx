"use client"
import { useContext } from "react";
import { IoEarthSharp } from "react-icons/io5";
import { UserContext } from "@/context/userContext";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import  Details  from "@/components/Details"

import SetCalander from "@/components/SetCalander";
import SetTime from "@/components/SetTime";
import Form from "@/components/Form";



export default async function SchedulePage() {
 

    const { showForm } = useContext<any>(UserContext);
    return (
        <div className='w-full h-full bg-white p-3 flex items-center flex-col '>
          
          {!showForm ? (
              <>
          <div className='flex items-center flex-col mt-4 w-[1324px] bg-white rounded-lg  p-2'>
            
                <div className='grid grid-cols-10 gap-1'>
                  <div className='col-span-4'>
                  <Details />
                  </div>
                  <div className='col-span-3'>
                  <div className='flex flex-col gap-10'>
                  <div className='flex items-center justify-start mt-6'>
            <h1 className='font-bold text-gray-700 font-sans text-2xl'>Select a Date & Time</h1>
          </div>
                  <div className=''>
                  <SetCalander />
                    
                  </div>
                  </div>
                  </div>
                  <div className='col-span-3'>
                    <div className=''>
                      <SetTime />
                    </div>
                  </div>
                </div>
                
                </div>
              </>
            ) : (
              <>
               <div className='flex items-center flex-col mt-4 w-[1020px] bg-white rounded-lg  p-2'>
                <div className='grid grid-cols-6 gap-2'>
                  <div className='col-span-3'>
                   <Details/>
                  </div>
                  <div className='col-span-3'>
                  <Form/>
                  </div>
                </div>
               </div>
              </>
              
            )}
          
        </div>
      );
}