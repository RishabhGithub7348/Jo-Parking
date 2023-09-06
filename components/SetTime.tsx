"use client";
import React, { useState, useRef, useContext } from "react";
import { useEffect } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import { UserContext } from "@/context/userContext";
import moment from "moment-timezone";

const SetTime = (user: any, bookingInfo: any) => {
  // const [selectedTimezone, setSelectedTimezone] = useState('Europe/Berlin'); // Default timezone
  const {
    selectedTime,
    setSelectedTime,
    box2Time,
    setBox2Time,
    box3Time,
    setBox3Time,
    box4Time,
    setBox4Time,
    setSelectedtime,
    setShowForm,
    bookedTimes,
    selectedDay,
  } = useContext<any>(UserContext);
  const [expandedBox, setExpandedBox] = useState(null);
  //   const [timezone, setTimezone] = useState('America/New_York');

  let selectedDate;

  if (selectedDay) {
    selectedDate = new Date(selectedDay);
  } else {
    selectedDate = new Date();
  }
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const handleTimeUp = () => {
    if (selectedTime === "23:00") {
      return; // Disable further execution of the function when selected time is 23:00
    }
    const timeParts = selectedTime.split(" ");
    const [hour, minutes] = timeParts[0].split(":");
    const period = timeParts[1];

    let newHour = parseInt(hour, 10);
    let newMinutes = parseInt(minutes, 10);

    newMinutes += 120;

    if (newMinutes >= 60) {
      newHour += Math.floor(newMinutes / 60);
      newMinutes %= 60;
    }

    if (newHour >= 24) {
      newHour %= 24;
    }

    const newTime = `${newHour.toString().padStart(2, "0")}:${newMinutes
      .toString()
      .padStart(2, "0")}`;
    setSelectedTime(newTime);

    const box2NewMinutes = newMinutes + 30;
    let box2NewHour = newHour + Math.floor(box2NewMinutes / 60);

    if (box2NewHour >= 24) {
      box2NewHour %= 24;
    }

    const box2NewTime = `${box2NewHour.toString().padStart(2, "0")}:${(
      box2NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")}`;
    setBox2Time(box2NewTime);

    const box3NewMinutes = box2NewMinutes + 30;
    let box3NewHour = box2NewHour + Math.floor(box3NewMinutes / 60);

    if (box3NewHour >= 24) {
      box3NewHour %= 24;
    }

    const box3NewTime = `${box3NewHour.toString().padStart(2, "0")}:${(
      box3NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")}`;
    setBox3Time(box3NewTime);

    const box4NewMinutes = box3NewMinutes + 30;
    let box4NewHour = box3NewHour + Math.floor(box4NewMinutes / 60) - 1;

    if (box4NewHour >= 24) {
      box4NewHour %= 24;
    }

    const box4NewTime = `${box4NewHour.toString().padStart(2, "0")}:${(
      box4NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")}`;
    setBox4Time(box4NewTime);
  };

  const handleTimeDown = () => {
    const timeParts = selectedTime.split(" ");
    const [hour, minutes] = timeParts[0].split(":");
    const period = timeParts[1];

    // Check if the selected time is already 18:00
    if (hour === "9" && minutes === "00") {
      return; // Skip the function execution
    }

    let newHour = parseInt(hour, 10);
    let newMinutes = parseInt(minutes, 10);

    newHour -= 2; // Decrease the hour by 1

    if (newHour < 0) {
      newHour = 23; // Wrap around to 23 when hour becomes negative
    }

    const newTime = `${newHour.toString().padStart(2, "0")}:${newMinutes
      .toString()
      .padStart(2, "0")} `;
    setSelectedTime(newTime);

    const box2NewMinutes = newMinutes + 30;
    const box2NewHour = newHour + Math.floor(box2NewMinutes / 60);
    const box2NewTime = `${(box2NewHour % 24).toString().padStart(2, "0")}:${(
      box2NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")} `;
    setBox2Time(box2NewTime);

    const box3NewMinutes = box2NewMinutes + 30;
    const box3NewHour = box2NewHour + Math.floor(box3NewMinutes / 60);
    const box3NewTime = `${(box3NewHour % 24).toString().padStart(2, "0")}:${(
      box3NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")} `;
    setBox3Time(box3NewTime);

    const box4NewMinutes = box3NewMinutes + 30;

    const box4NewHour = box3NewHour + Math.floor(box4NewMinutes / 60) - 1;
    const box4NewTime = `${(box4NewHour % 24).toString().padStart(2, "0")}:${(
      box4NewMinutes % 60
    )
      .toString()
      .padStart(2, "0")}`;
    setBox4Time(box4NewTime);
  };

  // useEffect(() => {
  //   const currentTime = moment(selectedTime, 'hh:mm A').tz(timezone).format('HH:mm');
  //   const box2ConvertedTime = moment(box2Time, 'hh:mm A').tz(timezone).format('HH:mm');
  //   const box3ConvertedTime = moment(box3Time, 'hh:mm A').tz(timezone).format('HH:mm');
  //   const box4ConvertedTime = moment(box4Time, 'hh:mm A').tz(timezone).format('HH:mm');

  //   setSelectedTime(currentTime);
  //   setBox2Time(box2ConvertedTime);
  //   setBox3Time(box3ConvertedTime);
  //   setBox4Time(box4ConvertedTime);
  // }, [timezone]);

  const handleBoxClick = (boxTime: any) => {
    setExpandedBox(boxTime);
    setSelectedtime(boxTime);
    // console.log(selectedtime)
  };

  const handleNextButtonClick = () => {
    // Show the form and hide the calendar
    setShowForm(true);
  };
  useEffect(() => {
    // console.log(selectedtime);
  });
  console.log(user)

  function checkBookingConditions(vechileType:any) {
    // Assuming userinfo is an array of user information objects
      if (vechileType === 'car' && bookingInfo.length === 1) {
        return true;
      } else if (vechileType === 'bike' && bookingInfo.length === 2) {
        return true;
      }
    return false; // None of the conditions matched
  }
  console.log(checkBookingConditions(user.user.userinfo.vechileType))
  

  const renderBox = (time: any) => {
    if (time === expandedBox) {
      return (
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <div className="flex items-center justify-center text-center  flex-col text-4xl w-[140px] bg-indigo-600 h-[50px]  text-white font-bold cursor-pointer rounded-md border-2 p-2">
              {time}
            </div>
          </div>
          <div className="col-span-2">
            <div
              className="flex items-center justify-center text-center flex-col text-4xl w-[140px] h-[50px] bg-black cursor-pointer  text-white font-bold rounded-md border-2 p-2"
              onClick={handleNextButtonClick}
            >
              Next
            </div>
          </div>
        </div>
      );
    } else {
      const isDisabled = bookedTimes.includes(time); // Check if the time is present in bookedTimes
      return (
        <div
          className={`flex items-center justify-center  flex-col text-4xl w-[300px] h-[50px] border-blue-300 text-blue-600 font-bold text-center rounded-md border-2 p-2 cursor-pointer hover:bg-blue-200 ${
            isDisabled ? "opacity-50 bg-[#e23333] text-white pointer-events-none  " : ""
          }`}
          onClick={() => handleBoxClick(time)}
        >
          {time}
        </div>
      );
    }
  };

  return (
    <div className="flex items-center justify-around -mt-24 h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center text-center flex-col  w-[320px] p-2 text-5xl ml-3 font-semibold text-slate-600">
          {formattedDate}
        </div>
        <IoIosArrowUp
          className={`text-5xl cursor-pointer 
          cursor-pointer'
        `}
          onClick={handleTimeDown}
        />
        {renderBox(selectedTime)}
        {renderBox(box2Time)}
        {renderBox(box3Time)}
        {renderBox(box4Time)}
        <IoIosArrowDown
          className={`text-5xl cursor-pointer 
          cursor-pointer'
        `}
          onClick={handleTimeUp}
        />
      </div>
    </div>
  );
};

export default SetTime;
