"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { RiParkingBoxFill } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6 text-black">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;

          return (
            <Link
            href={link.route}
            key={link.label}
            className={`leftsidebar_link ${isActive && "bg-primary-500 text-white"}`}
          >
            <Image
              src={link.image}
              alt={link.label}
              width={24}
              height={24}
            />

<p className=" max-lg:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>


      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <BiLogOut className="h-6 w-6" />

              <p className="text-black max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;

// 4:15:10
