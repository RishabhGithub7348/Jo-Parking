import {  SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {BiLogOut} from 'react-icons/bi'
function Topbar() {
  return (
    <nav className='topbar '>
      <Link href='/' className='flex items-center gap-4 pr-1  '>
        <Image src='/icon.png' alt='logo' width={28} height={28} />
        <p className='text-heading3-bold text-black max-xs:hidden '>JoParking</p>
      </Link>

      <div className='flex items-center gap-1'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
              <BiLogOut className="h-6 w-6"/>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
    <UserButton/>
      
      </div>
    </nav>
  );
}

export default Topbar;