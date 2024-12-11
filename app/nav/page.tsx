"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md z-50 ">
        <div className="flex justify-between md:px-16 md:py-[18px] py-6 items-center px-8">
          <div className="flex items-center">
            <Image
              src="/blu.png"
              alt="Logo"
             height={60}
             width={60}
            />
            <div className="text-2xl font-bold ml-4 text-white">Franklink Limited</div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:text-xl">
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} className="text-white" size="2x" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-white" size="2x" />
              )}
            </button>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center  xl:gap-[30px] 2xl:gap-10 text-white">
            <Link href="/home" className="font-bold lg:px-4 text-[15px]">HOME</Link>
            <Link href="#About" className="font-bold lg:px-4 text-[15px]">ABOUT US</Link>
            <Link href="#services" className="font-bold lg:px-4 text-[15px]">SERVICES</Link>
            <button className="md:flex hidden font-bold text-[15px] transition-colors py-[15px] rounded-[12px] bg-[#136BBB] text-white px-[40px]">
              <Link href="#Contact">CONTACT US</Link>
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 shadow-lg  z-10 w-full h-full flex justify-center">
            <div className="flex flex-col space-y-4">
              <Link href="/home" className="py-2 text-center font-bold text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link href="#About" className="py-2 text-center font-bold text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
              <Link href="#service" className="py-2 text-center font-bold text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
              <Link href="#Contact" className="py-2 text-center font-bold text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
            </div>
          </div>
        )}
      </nav>

     
    </div>
  );
};

export default Navbar;
