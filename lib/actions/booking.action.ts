"use server";

import Booking from "../models/booking.model";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";
interface Params {
    floor: string,
    slot: string,
    time: string,
    path: string,
    author: string,
    selectedDay: string,
    selectedtime: string,
    vechile: string,

  }
  
  export async function createBooking({ floor, slot, time, author,selectedDay,selectedtime, vechile, path }: Params) {
    try {
      connectToDB();
  
     
  
      const createBooking = await Booking.create({
        floor,
        slot,
        author,
        time,
        selectedDay,
        selectedtime,
        vechile

      });
  
      // Update User model
      await User.findByIdAndUpdate(author, {
        $push: { users: createBooking._id },
      });
  
     
  
      revalidatePath(path);
    } catch (error: any) {
      throw new Error(`Failed to create booking: ${error.message}`);
    }
  }

  export async function fetchBooking(userId: string) {
    try {
      connectToDB();
  
      return await Booking.findOne({ author: userId })
    } catch (error: any) {
      throw new Error(`Failed to fetch booking: ${error.message}`);
    }
  }
  



  export async function deleteBooking(bookingId: string): Promise<void> {
    try {
      connectToDB();
  
      // Find and delete the booking by its _id
      await Booking.deleteOne({ author: bookingId });
  
      // Update User model if necessary
  
      // No need to call revalidatePath() here
  
    } catch (error: any) {
      throw new Error(`Failed to delete booking: ${error.message}`);
    }
  }
  