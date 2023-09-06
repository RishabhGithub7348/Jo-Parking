"use client"
import React from 'react';
import { TbBrandBooking } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; // Import from 'next/router'

const LastBookingStatusBox = (bookingInfo: any) => {
  if(bookingInfo){

  }
  const timestamp = bookingInfo.bookingInfo.time;
  const parts = timestamp.split('at');
  const date = parts[0].trim();
  const time = parts[1].trim();

  console.log('Date:', date);
  console.log('Time:', time);
 

  const router = useRouter();

  const handleClick = () => {
    console.log('clicked');

    router.push('/payment'); // Use router.push from 'next/router'
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex flex-row gap-3">
        <TbBrandBooking className="text-2xl mb-4 h-[24px] w-[24px] text-blue" />
        <h2 className="text-xl font-semibold mb-4">Last Booking Status</h2>
      </div>
      <p className="text-gray-500">Time of Booking: {`${date} at ${time}`}</p>
      <Button
        className="mr-auto mt-2 bg-[#5369e7] px-6 rounded-md text-white"
        onClick={() => handleClick()}
      >
        View
      </Button>
    </div>
  );
};

export default LastBookingStatusBox;
