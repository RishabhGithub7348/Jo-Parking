"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
 
  return (
    <div className="text-black font-bold py-40 text-center space-y-5">
    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
      <h1 className="text-heading1-bold">Park your Vechile with</h1>
      <div className="text-transparent bg-clip-text text-heading2-bold bg-gradient-to-r from-purple-600 to-blue">
        <TypewriterComponent
          options={{
            strings: [
              "Instant Parking Reservations",
              "Effortless Parking Solutions",
              "with hassle-free"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
    <div className="text-sm text-heading2-bold font-bold text-zinc-800">
    No more hassle, no more stress. Just park and go
    </div>
    <div>
      <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
        <Button variant="secondary"  size="lg" className="mt-5 bg-gradient-to-r font-semibold text-heading3-bold from-purple-400 to-blue text-white rounded-full">
         Lets Park 
        </Button>
      </Link>
    </div>
  </div>
  
  );
};