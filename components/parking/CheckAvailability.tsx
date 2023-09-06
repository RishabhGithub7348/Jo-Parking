import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

interface CheckAvailabilityProps {
  floorName: string;
}

const CheckAvailability: React.FC<CheckAvailabilityProps> = ({ floorName }) => {
  const router = useRouter();

  const spots = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    
  ];

  const handleClick = (number: number) => {
    router.push(`/parking/${floorName}-${number}`)
  };

  const [mounted, setMounted] = useState(false);
  const data = floorName

  const floor = data.slice(0,2)
  console.log(floor)
  const floorNames = {
    "1G": "Ground floor",
    "1F": "First floor",
    "2F": "Second floor",
    "3F": "Third floor",
    "4F": "Fourth floor",
    "5F": "Fifth floor",
    "6F": "Sixth floor",
    // Add more mappings as needed
  };
//@ts-ignore
  const floorname = floorNames[floor] || "";
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="mt-6">
        <p className="text-heading2-semibold mb-3">Spots for {floorname}</p>
        <ul>
          {spots.map((spot) => (
            <li className='cursor-pointer' key={spot.number} onClick={() => {
              handleClick(spot.number);
            }}>
              <div className="shadow-md h-[150px] overflow-hidden p-3 mb-3 rounded-md border border-gray-300">
                <p className='font-bold text-stone-800 text-heading3-bold mb-3'>Spot {spot.number}</p>
                <p className='text-stone-800 text-heading4-medium'>Avaliable Space for 1 car and 2 bikes</p>
                <BsFillArrowRightCircleFill
                  
                  className="h-8 -mt-6 cursor-pointer w-6 text-blue-500 ml-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CheckAvailability;
