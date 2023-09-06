"use server";

import { revalidatePath } from "next/cache";


import User from "../models/user.model";

import { connectToDB } from "../mongoose";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId })
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  vechileImage: string,
  userImage:String,
  userId:String,
  email:String,
  userName:String,

  vechile_number: String,
  vechileName: String,
  vechileType: String,
  vechile_cardNumber:String,
  
  phoneNumber:String,
  dateofBirth:String,
  drivingExperience:String,
  address:String,
  path:string
}

export async function updateUser({
  userId,
  vechile_number,
  vechileName,
  vechileType,
  vechileImage,
  email,
  userName,
  path,
  userImage, vechile_cardNumber,
  
  phoneNumber,
  dateofBirth,
  drivingExperience,
  address,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        userName,
        email,
        userImage,
        vechile_number,
        vechileType,
        vechile_cardNumber,
        
        phoneNumber,
        dateofBirth,
        drivingExperience,
        address,
        vechileImage,

        vechileName,

        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}


