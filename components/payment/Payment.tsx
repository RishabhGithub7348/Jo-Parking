"use client";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { MdPayment } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { deleteBooking } from "@/lib/actions/booking.action";
type PaymentGatewayProps = {
  userInfo: any;
  bookingInfo: any;
};

const Payment: React.FC<PaymentGatewayProps> = ({ userInfo, bookingInfo }) => {
  const timestamp = bookingInfo?.time;
  const parts = timestamp ? timestamp.split("at") : ["", ""];
  const date = parts[0].trim();
  const time = parts[1].trim();

  const path = usePathname();
  const router = useRouter();
  const bookingTime = date && time ? `${date} at ${time}` : "No Parking";

  async function handleClick(userId: string, path: string) {
    await deleteBooking(userId);

    router.push("/dashboard");
  }
  const [currentTime, setCurrentTime] = useState(moment()); // Use Moment.js for currentTime
  const [ownerName, setOwnerName] = useState(userInfo.userName);
  const hourlyRate = 30; // Rate per hour in Rs
  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(moment()); // Use Moment.js to update currentTime
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  const calculateBill = () => {
    console.log("hi");
    const bookingMoment = moment(`${date} ${time}`, "MMM DD YYYY HH:mm:ss");
    const currentMoment = currentTime;

    // Check if the current time is before the booking time
    if (currentMoment.isBefore(bookingMoment)) {
      return 0; // Amount is zero if booking time is in the future
    }

    const timeDifferenceInHours = currentMoment.diff(
      bookingMoment,
      "hours",
      true
    );
    console.log(timeDifferenceInHours);
    const totalBill = timeDifferenceInHours * hourlyRate;
    const bill = totalBill ? totalBill : 0;
    return bill;
  };

  return (
    <div className="bg-white mt-9 h-[500px]  w-[999px] p-4 rounded-lg shadow-md">
      <div className="flex flex-row gap-6">
        <MdPayment className="h-12 w-12 text-blue" />
        <h2 className=" text-heading2-semibold font-semibold mb-4">
          Payment Gateway
        </h2>
      </div>
      <div className="mb-4 mt-9 grid lg:grid lg:grid-cols-2">
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Name</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {ownerName}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Email Address</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {userInfo.email}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Vechile Name</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {userInfo.vechileName}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Car Card Number</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {userInfo.vechile_cardNumber}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Booking Timing</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {bookingTime.toLocaleString()} {/* Convert Date to string */}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Slot Number</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {bookingInfo?.slot ? bookingInfo.slot : "No Booking"}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">Floor Number</p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {bookingInfo?.floor ? bookingInfo.floor : "No Booking"}
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="data w-[396px] justify-evenly">
          <div className="bg-white flex mt-4">
            <p className="text-[#8e8c8ee4] flex-shrink-0 ">
              Total Payable Amount{" "}
            </p>
            <p className={`  ml-auto text-slate-600 font-bold `}>
              {" "}
              {calculateBill().toFixed(2)} INR
            </p>
          </div>
          <div className="w-full mt-2 h-[1px] bg-[#636363dd]" />
        </div>{" "}
        <div className="flex mt-12 flex-col gap-3">
          <p className=" text-body-normal font-bold">Note</p>
          <div className="flex flex-col gap-2">
            <p> ➡️ Payment will be done on the slot booking date and time</p>
            <p> ➡️ 30 INR charged for one hour of parking</p>
          </div>
        </div>
        {bookingInfo && (
          <Button
            className="bg-[#5369e7] w-[100px]  ml-auto mt-[6rem]  px-6 rounded-md text-white"
            onClick={() => handleClick(userInfo._id, "/")}
          >
            Pay
          </Button>
        )}
      </div>
    </div>
  );
};

export default Payment;
