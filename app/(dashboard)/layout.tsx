import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import Topbar from "@/components/shared/Topbar";

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
    <>
     <Topbar />

       <main className='flex flex-row'>
         <LeftSidebar />
         <section className='main-container'>
           <div className='w-full max-w-4xl'>{children}</div>
         </section>
         {/* @ts-ignore */}
         <Bottombar/>
       </main>

    </>
  );
}
