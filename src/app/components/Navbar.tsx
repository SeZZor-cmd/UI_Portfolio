"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
  const [isClick, setisClick] = useState(false);
  const pathname = usePathname();
  

  function toggleNavbar() {
    setisClick(!isClick);
  }

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center p-3 bg-white  ">
      <div className="flex justify-end w-full mr-4 mt-1">
        <div className="hidden md:flex md:space-x-2 lg:space-x-4 mr-4 mt-1 text-[20px] font-medium">
          <Link href="/Work" className={pathname === '/Work' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Work</Link>
          <Link href="/Blog" className={pathname === '/Blog' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Blog</Link>
          <Link href="/Contact" className={pathname === '/Contact' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Contact</Link>
        </div>
        <div className="flex ml-auto md:hidden mr-2">
          <button
            aria-label="Toggle navigation"
            className="inline-flex items-center justify-center p-2 text-black hover:text-gray-800"
            onClick={toggleNavbar}
          >
            <FontAwesomeIcon
              icon={isClick ? faX : faBars}
              size="1x"
              className="focus:border-none active:border-none"
              alt="menu icon"
            />
          </button>
        </div>
      </div>
      {isClick && (
        <div className="flex flex-col items-center w-full mt-4 md:hidden">
          <Link href="/Work" className={pathname === '/Work' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Work</Link>
          <Link href="/Blog" className={pathname === '/Blog' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Blog</Link>
          <Link href="/Contact" className={pathname === '/Contact' ? 'text-[#FF6464]' : 'text-[#21243D]'}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
