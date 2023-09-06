import React from 'react'
import MainContainer from './MainContainer'
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';
import { fetchBooking } from '@/lib/actions/booking.action';
type Props = {}

async function page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = await fetchUser(user.id);
  
  const bookingInfo = await fetchBooking(userInfo._id)

  return (
    <div>
      <MainContainer userinfo={userInfo} bookingInfo={bookingInfo}  />
    </div>
  )
}

export default page