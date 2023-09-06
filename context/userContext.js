"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const getTimezoneByCountry = (country) => {
  const timezoneMap = {
    'United States': 'America/New_York',
    'United Kingdom': 'Europe/London',
    'India': 'Asia/Kolkata',
    'Australia': 'Australia/Sydney',
    'Japan': 'Asia/Tokyo',
    'Germany': 'Europe/Berlin'
    
    // Add more country-timezone mappings as needed
  };

  return timezoneMap[country] || 'UTC';
};

export const UserContext = createContext({});
 
export function UserContextProvider({ children }) {
  const [country, setCountry] = useState('Germany');
  const [timezone, setTimezone] = useState('Europe/Berlin');
  const [showCalendar, setShowCalendar] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedTime, setSelectedTime] = useState('9:00');
  const [box2Time, setBox2Time] = useState('9:30');
  const [box3Time, setBox3Time] = useState('10:00 ');
  const [box4Time, setBox4Time] = useState('10:30');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedtime, setSelectedtime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [update, setUpdate] = useState(false)
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [userData, setUserData] = useState('');
 
  
  
  const deleteReservation = (reservationId) => {
    setReservations(prevReservations => {
      const updatedReservations = prevReservations.filter(reservation => reservation._id !== reservationId);
      setUpdate(true);
      return updatedReservations;
    });
  };
  
  


const filterReservationsByDay = (reservations, day) => {
  const filteredReservations = reservations.filter(reservation => {
    const reservationDate = reservation.selectedDay;
    const reservationDay = reservationDate;
    return reservationDay === day;
  });

  return filteredReservations;
};

useEffect(() => {
  const filtered = filterReservationsByDay(reservations, selectedDay);
  setBookedDates(filtered);
}, [selectedDay, reservations]);

// console.log(bookedDates);



useEffect(() => {
  const extractedTime = bookedDates.map(reservation => reservation.selectedtime);
  setBookedTimes(extractedTime);
}, [bookedDates]);

console.log(bookedTimes);




  

  



 
  return (
    <UserContext.Provider
      value={{
        country,
        setCountry,
        timezone,
        setTimezone,
        showCalendar,
        setShowCalendar,
        showForm,
        setShowForm,
        selectedTime,
        setSelectedTime,
        box2Time,
        setBox2Time,
        box3Time,
        setBox3Time,
        box4Time,
        setBox4Time,
        selectedDay,
        setSelectedDay,
        selectedtime,
        setSelectedtime,
        currentDate,
        setCurrentDate,
        reservations,
        setReservations,
        update,
        setUpdate,
        isAuth,
        setIsAuth,
        bookedTimes,
        
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
