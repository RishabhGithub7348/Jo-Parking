"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image className="rounded-sm " fill alt="Logo" src="/icon.png" />
        </div>
        <h1 className="text-2xl font-bold text-black">
          JoParking
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary"  size="lg" className=" bg-gradient-to-r font-semibold text-lg from-purple-400 to-blue text-white rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}
