import Payment from '@/components/payment/Payment'
import React from 'react'
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';
import { fetchBooking } from '@/lib/actions/booking.action';


type Props = {}


async  function page(){
  const user = await currentUser();
  if (!user) return null;
  console.log(user.emailAddresses[0].emailAddress)

  const userInfo = await fetchUser(user.id);

  const bookingInfo = await fetchBooking(userInfo._id)

  console.log(bookingInfo)
  return (
    <div>

      <Payment userInfo={userInfo} bookingInfo={bookingInfo}  />
    </div>
  )
}

export default page