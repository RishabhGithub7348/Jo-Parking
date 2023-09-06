import mongoose, { Document, Model } from 'mongoose';

// Define an interface for the parking spot
export interface IParkingSpot extends Document {
  floorNumber: number;
  spotNumber: number;
  vehicleType: 'car' | 'bike';
  isOccupied: boolean;
}

// Define a schema for parking spots
const parkingSpotSchema = new mongoose.Schema<IParkingSpot>({
  floorNumber: {
    type: Number,
    required: true,
  },
  spotNumber: {
    type: Number,
    required: true,
  },
  vehicleType: {
    type: String, // Define it as a string type
    enum: ['car', 'bike'], // Specify the allowed values
    required: true,
  },
  isOccupied: {
    type: Boolean,
    default: false,
  },
});

// Define a schema for the parking lot (building)
export interface IParkingLot extends Document {
  name: string;
  totalFloors: number;
  spotsPerFloor: number;
  parkingSpots: IParkingSpot[];
}

const parkingLotSchema = new mongoose.Schema<IParkingLot>({
  name: {
    type: String,
    required: true,
  },
  totalFloors: {
    type: Number,
    default: 5, // You can change this to your desired number of floors
  },
  spotsPerFloor: {
    type: Number,
    default: 5, // You can change this to your desired number of spots per floor
  },
  parkingSpots: [parkingSpotSchema],
});

// Create a model for the parking lot
export const ParkingLot: Model<IParkingLot> = mongoose.model('ParkingLot', parkingLotSchema);
