import { UserButton, currentUser } from "@clerk/nextjs"

import { fetchUser } from "@/lib/actions/user.actions"
import {redirect} from "next/navigation"
import Header from "@/components/card/Header";
import CarInfo from "@/components/card/CarInfo";
import LastBookingStatusBox from "@/components/card/LatestParking";
import { fetchBooking } from "@/lib/actions/booking.action";


export default async function Home() {
  const user = await currentUser();
  if (!user) return null;
  console.log(user.emailAddresses[0].emailAddress)

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const bookingInfo = await fetchBooking(userInfo._id)


  return (
    <div>
    <Header vechileName={userInfo.vechileName} vechileNumber={userInfo.vechile_number}  />
      <h1 className="head-text mt-3 text-left">Dashboard</h1>

      <section className='mt-9 flex flex-col gap-10'>
        <CarInfo user={userInfo}/>
      {bookingInfo && 
      <LastBookingStatusBox bookingInfo={bookingInfo}/>

      
      }
      </section>
    </div>
  )
}
