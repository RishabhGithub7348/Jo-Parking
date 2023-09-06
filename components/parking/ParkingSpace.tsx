// ParkingSpace.tsx

import React, { FunctionComponent } from 'react';

interface ParkingSpaceProps {
  onParkVehicle: () => void;
}

const ParkingSpace: FunctionComponent<ParkingSpaceProps> = ({ onParkVehicle }) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Park Your Vehicle</h2>
      <p>Choose a parking space to park your vehicle:</p>
      <button
        className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        onClick={onParkVehicle}
      >
        Park Vehicle
      </button>
    </div>
  );
};

export default ParkingSpace;
