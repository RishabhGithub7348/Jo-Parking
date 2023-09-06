import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  vechileImage: String,
  userImage:String,
  userId:String,
  email:String,
  userName:String,

  vechile_number: String,
  vechileName: String,
  vechileType: String,
  vechile_cardNumber:String,
  insuranceNumber:String,
  phoneNumber:String,
  dateofBirth:String,
  drivingExperience:String,
  address:String,


  booking: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
 
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
