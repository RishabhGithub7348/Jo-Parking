import React from 'react';
import Image from 'next/image';
// Define the props for the Header component
interface HeaderProps {
  vechileName: string;
  vechileNumber: string;
}

const Header: React.FC<HeaderProps> = ({ vechileName, vechileNumber }) => {
  return (
    <div className=" flex flex-row gap-6 ">
        <Image src="/car.jpg" alt="car" width={90} height={90} />
        <div className=''>

          <h1 className=' text-heading2-bold font-bold'>{vechileName}</h1>
          <p className=' text-heading4-medium'> {vechileNumber}</p>
        </div>
    </div>
  );
};

export default Header;
