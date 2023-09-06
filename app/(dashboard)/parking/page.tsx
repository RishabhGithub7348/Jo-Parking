// Parking.tsx
"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import CheckAvailability from "@/components/parking/CheckAvailability";
const Parking: FunctionComponent = () => {
  const [floors, setFloors] = useState([
    { name: "Ground Floor", code:'1G', active: true },
    { name: "1st Floor",code:'1F', active: false },
    { name: "2nd Floor",code:'2F', active: false },
    { name: "3rd Floor",code:'3F', active: false },
    { name: "4th Floor",code:'4F', active: false },
    { name: "5th Floor",code:'5F', active: false },
    { name: "6th Floor",code:'6F', active: false },
  ]);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(0);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleFloorClick = (index: any) => {
    const updatedFloors = [...floors];
    updatedFloors.forEach((floor, i) => {
      floor.active = i === index;
    });
    setFloors(updatedFloors);
    setSelectedFloor(index);
  };

  return (
    <div className=" mx-auto mt-10">
      <div className="flex flex-row gap-3">
        {floors.map((item, index) => (
          <div
            key={index}
            className={`${
              item.active
                ? "bg-[#5369e7] text-white"
                : "bg-gray-200 text-stone-700"
            } p-2 w-[120px] h-[60px] text-center  font-semibold rounded-md cursor-pointer`}
            onClick={() => handleFloorClick(index)}
          >
            <p className="mt-2">

            {item.name}
            </p>
          </div>
        ))}
      </div>
      <div>

      {selectedFloor !== null && (
        <CheckAvailability floorName={floors[selectedFloor].code} />
      )}
      </div>
    </div>
  );
};

export default Parking;
