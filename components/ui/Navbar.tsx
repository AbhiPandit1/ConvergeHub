import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';

import { UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className=" flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-">
        <Image
          src="/icons/logo.svg"
          alt="icon"
          width={32}
          height={32}
          className="max-sm:sixe-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          ConvergeHub
        </p>
      </Link>

      <div className="flex-between gap-5 ">
        <UserButton />

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
