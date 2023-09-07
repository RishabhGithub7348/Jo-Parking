# Parking Web App

![image_2023-09-06_20-23-29](https://github.com/RishabhGithub7348/Jo-Parking/assets/75687649/a5907886-7063-49bd-b791-b6a6e5a9afe7)

Welcome to the Parking Web App project! This web application is built using Next.js and TypeScript, styled with Tailwind CSS and store the database in MongoDB. It provides a comprehensive solution for managing parking spaces in a building. Users can sign in using various authentication methods, book parking slots, view vehicle details, and make payments seamlessly.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [Dashboard](#dashboard)
- [Parking](#parking)
- [Payment](#payment)
- [Demo Video](#demo-video)


## Features

- **Personalized Sign In/Sign Up**: Users can create accounts or sign in using various authentication methods, including OAuth providers and email.

- **Dashboard**: The dashboard provides an overview of the user's parking bookings and vehicle details.

- **Parking Management**: Users can browse through different floors and slots within a building, select a time slot from an organized calendar, and book parking slots.

- **Payment Integration**: After booking a slot, users can make payments through the app. Once payment is confirmed, the booking is completed, and the slot is secured.
 
 - **MongoDB Database**: All user data and the booking slots data is directly connected to the MongoDB database so all data is remotely accessible .
 

## Getting Started

To run the Parking Web App locally, follow these steps:

1. Clone the repository

2. Navigate to the project directory

3. Install dependencies: `npm install`

4. Start the development server: `npm run dev`

5. Open your web browser and go to `http://localhost:3000` to access the app.

6. Setup your env file model with all required paramters a model env has been given to this repo


## Authentication

The Parking Web App supports multiple authentication methods:

- **OAuth Providers**: Users can sign in using popular OAuth providers like Google, Facebook, or GitHub.

- **Email Authentication**: Users can create an account and sign in using their email and password.

## Dashboard

The dashboard is the central hub for users to manage their parking bookings and view vehicle details. Users can:

- View a list of their active parking bookings.

- See detailed information about their registered vehicles.

## Parking

The parking section allows users to explore available parking spaces within a building:

- **Building Floors**: Users can select a specific building floor.

- **Parking Slots**: Users can browse through available parking slots on the selected floor.

- **Booking**: Users can choose a date and time from a well-organized calendar and book their parking slot.

## Payment

Payment integration is seamlessly integrated into the app:

- After selecting and confirming a parking slot, users can make payments securely.

- Once payment is successful, the booking is completed, and the slot is reserved.

- Users can also view slot booked within their dashboard.

## Demo Video

[![Watch the video](https://res.cloudinary.com/ds2fe7xai/image/upload/v1694046653/image_2023-09-07_06-00-24_hladr8.png
)](https://www.youtube.com/watch?v=xpejaMXOpgc)




