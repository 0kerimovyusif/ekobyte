"use client";

import Link from "next/link";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { Spline_Sans } from "next/font/google";

const spline = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (

    <header className=" fixed w-full bg-white lg:h-[85.2px] px-5 lg:px-[102px] flex items-center  z-50 shadow-sm lg:shadow-none">
      <div className="justify-between text-[16px] lg:text-[18px] w-full container flex items-center text-[#000] lg:mx-[50px] py-4 lg:py-[13.5px]">
        
        {/* Logo */}
        <Link href="/">
          <img className="w-[130px] lg:w-[170px]" src="/images/logo/logo.png" alt="logo" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-[24px] text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-white flex-col items-start px-5 py-5 gap-4 shadow-lg lg:shadow-none lg:static lg:w-auto lg:flex lg:flex-row lg:items-center lg:px-0 lg:py-0 text-[16px] ${spline.className} font-[600] lg:gap-0 transition-all duration-300`}
        >
          <Link href="/" className="lg:px-[17px] flex items-center w-full lg:w-auto justify-between lg:justify-start">Home<IoIosArrowDown className="ml-[5px] lg:block hidden" /></Link>
          <Link href="/about" className="lg:px-[17px] w-full lg:w-auto">About</Link>
          <Link href="/" className="lg:px-[17px] flex items-center w-full lg:w-auto justify-between lg:justify-start">Services<IoIosArrowDown className="ml-[5px] lg:block hidden" /></Link>
          <Link href="/" className="lg:px-[17px] flex items-center w-full lg:w-auto justify-between lg:justify-start">Projects<IoIosArrowDown className="ml-[5px] lg:block hidden" /></Link>
          <Link href="/" className="lg:px-[17px] flex items-center w-full lg:w-auto justify-between lg:justify-start">Blog<IoIosArrowDown className="ml-[5px] lg:block hidden" /></Link>
          <Link href="/" className="lg:px-[17px] flex items-center w-full lg:w-auto justify-between lg:justify-start">Team<IoIosArrowDown className="ml-[5px] lg:block hidden" /></Link>
          <Link href="/" className="lg:px-[17px] w-full lg:w-auto">Contact</Link>
          
          <Link
            href="/"
            className="mt-4 lg:mt-0 justify-center lg:justify-end lg:ml-[37px] py-[15px] lg:py-[19px] px-[27px] bg-[#E7F914] w-full lg:w-[182px] rounded-[50px] inline-flex items-center gap-2 tracking-[0.6px] transition-colors duration-[0.5s] lg:hover:text-[#fff]"
          >
            Get A Quote <GoArrowRight className="stroke-[1] size-5" />
          </Link>
        </nav>
      </div>
    </header>
 
  );
}