import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JoParking",
  description: "Park with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
          <div className={`${inter.className} w-full flex justify-center items-center min-h-screen`} >

          {children}
          </div>
          
       
  );
}