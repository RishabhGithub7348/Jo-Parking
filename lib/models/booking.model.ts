import mongoose from "mongoose";

const bookingScheme = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },


  floor:{
    type: String,
    required: false,
  },
  slot:{
    type: String,
    required: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
 
 
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingScheme);

export default Booking;