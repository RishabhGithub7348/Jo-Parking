"use client"
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";

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
  const [selectedTime, setSelectedTime] = useState('18:00');
  const [box2Time, setBox2Time] = useState('18:15');
  const [box3Time, setBox3Time] = useState('18:30');
  const [box4Time, setBox4Time] = useState('18:45');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedtime, setSelectedtime] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [update, setUpdate] = useState(false)
  const [isAuth, setIsAuth] = useState(false);
  const [profile, setProfile] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const [bookedTimes, setBookedTimes] = useState([]);
  const [userVechile, setUserVechile] = useState(null);
  const [bookingData, setBookingData] = useState([]);
  const [data, setData] = useState([]);
 
  
  
  













  


  useEffect(() => {
    async function bookingDetails() {
      try {
        // Make an Axios GET request to fetch user details using the provided objectId
        const response = await axios.get(`/api/booking`);

        setBookingData(response.data);
      } catch (error) {
        // Handle errors as needed
        console.error('Error fetching user details:', error);
      }
    }

    bookingDetails();
  }, []);

  console.log(bookingData);

  

  useEffect(() => {
    async function fetchUserDetails() {
      try {
        // Make an Axios GET request to fetch user details using the provided objectId
        const response = await axios.get(`/api/user`);

        setUserVechile(response.data.vechileType);
      } catch (error) {
        // Handle errors as needed
        console.error('Error fetching user details:', error);
      }
    }

    fetchUserDetails();
  }, []);

    console.log(userVechile);


    const filterReservationsByDay = (reservations, day) => {
      const filteredReservations = reservations.filter(reservation => {
        const reservationDate = reservation.selectedDay;
        const reservationDay = reservationDate;
        return reservationDay === day;
      });
    
      return filteredReservations;
    };
    
    useEffect(() => {
      const filtered = filterReservationsByDay(bookingData, selectedDay);
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
        
        setUserVechile,
        userVechile
        
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
