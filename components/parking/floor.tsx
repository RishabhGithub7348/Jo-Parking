import React, { useState } from 'react';

const Floor = () => {
    const [floors, setFloors] = useState([
        { name: 'Ground Floor', active: false },
        { name: '1st Floor', active: true },
        { name: '2nd Floor', active: false },
        { name: '3rd Floor', active: false },
        { name: '4th Floor', active: false },
        { name: '5th Floor', active: false },
        { name: '6th Floor', active: false },
    ]);

    const handleFloorClick = (index:any) => {
        const updatedFloors = [...floors];
        updatedFloors.forEach((floor, i) => {
            floor.active = i === index;
        });
        setFloors(updatedFloors);
    };

    return (
        <div className="flex flex-row gap-3">
            {floors.map((item, index) => (
                <div
                    key={index}
                    className={`${
                        item.active ? 'bg-[#5369e7] text-white' : 'bg-gray-200 text-stone-700'
                    } p-2 w-[120px] h-[60px] text-center  font-semibold rounded-md cursor-pointer`}
                    onClick={() => handleFloorClick(index)}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default Floor;
