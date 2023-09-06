// ParkingCharges.tsx

import React, { FunctionComponent } from 'react';

interface ParkingChargesProps {
  parkingStartTime: string;
  onTakeVehicleBack: () => void;
}

const ParkingCharges: FunctionComponent<ParkingChargesProps> = ({
  parkingStartTime,
  onTakeVehicleBack,
}) => {
  const calculateCharges = () => {
    // Calculate parking charges based on parking start time (you can implement this logic)
    return '$5.00'; // Example parking charge
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg text-black">
      <h2 className="text-xl font-semibold mb-4">Parking Charges</h2>
      <p>Your vehicle was parked since {parkingStartTime}.</p>
      <p>Parking charges: {calculateCharges()}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={onTakeVehicleBack}
      >
        Take Vehicle Back
      </button>
    </div>
  );
};

export default ParkingCharges;
