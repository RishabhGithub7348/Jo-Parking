import { NextRequest, NextResponse } from 'next/server';
import User from '@/lib/models/user.model';
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { connectToDB } from '@/lib/mongoose';

connectToDB();


export async function GET(request: NextRequest) {
  try {
    const user:any = await currentUser();
    const userInfo = await fetchUser(user.id);
    const userId = userInfo._id;
    

    const BookingData = await User.findById({ _id: userId });

    return NextResponse.json(BookingData);
  } catch (error: any) {
    console.error('Error fetching booking data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}