"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
// import { FaBeer } from "react-icons/fa";
import { FaBars, FaCcVisa, FaCreditCard, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <>
      <nav className='fixed top-0 left-0 shadow-lg z-30 w-full backdrop-blur-blurCustom border-b-2 border-gray-400 bg-bgColor1 py-[15px]'>
        <div className='container mx-auto flex px-4 justify-between items-center h-16 relative'>
          <Link href='/'>
            <Image
              src='/logo.jpg'
              width={74}
              height={29}
              className='rounded-md'
            />
          </Link>
          <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
            {navLinks.map((link) => {
              const { id, href, label } = link;
              return (
                <Link
                  key={id}
                  href={href}
                  className='px-6 py-4 rounded-[8px] text-white capitalize hover:bg-cusBgCol hover-text-white motion hover:text-black '
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <button
            type='button'
            className='md:hidden text-[20px] text-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`md:hidden fixed top-0 left-0 h-screen w-cusWidth6 bg-cusBgCol2 shadow-lg z-cuzindex flex flex-col justify-start pt-[20px] pl-[20px] items-start text-white  transition-all duration-1000 ease-in ${
            isOpen ? "active" : "left-cusLeft"
          }`}
        >
          <Link href='/'>
            <Image
              src='/logo.jpg'
              width={74}
              height={29}
              className='rounded-md mb-[20px]'
            />
          </Link>
          {navLinks.map((link) => {
            const { id, href, label } = link;
            return (
              <Link
                key={id}
                href={href}
                onClick={() => setIsOpen(false)}
                className=' hover:text-cuscol2 text-[18px] text-cusBgCol6 text-left pt-[16px]'
              >
                {label}
              </Link>
            );
          })}
          <div className='absolute top-[6%]  right-[5%] text-[16px]' y>
            <button type='button' onClick={() => setIsOpen(false)}>
              <FaTimes className='text-[20px]' />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
