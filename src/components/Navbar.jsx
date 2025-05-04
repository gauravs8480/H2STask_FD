import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='relative z-10 bg-transparent w-full h-16 flex py-4   xl:py-12 3xl:py-12  4xl:py-20 items-center justify-between px-4   md:px-[30px]   xl:px-[80px] text-white'>
      <h1 className='text-2xl md:text-4xl 3xl:text-5xl font-bold'>MNTN</h1>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-10'>
        <h2 className='font-bold cursor-pointer 4xl:text-xl '>About Us</h2>
        <h3 className='font-bold cursor-pointer 4xl:text-xl '>Equipment</h3>
        <h3 className='font-bold cursor-pointer 4xl:text-xl '>Blog</h3>
      </div>

      {/* Desktop Account */}
      <div className='hidden md:flex gap-2 items-center cursor-pointer'>
        <FaRegUser /> <span className='font-bold 4xl:text-xl'>Account</span>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button className='text-white text-2xl' onClick={() => setDropdownOpen(!dropdownOpen)}>
          ☰
        </button>

        {/* Mobile Dropdown Menu */}
        {dropdownOpen && (
          <div className='absolute top-16 right-4 bg-[#1e293b] text-white rounded shadow-lg p-4 space-y-3 w-40'>
            <h2 className='font-bold cursor-pointer'>About Us</h2>
            <h3 className='font-bold cursor-pointer'>Equipment</h3>
            <h3 className='font-bold cursor-pointer'>Blog</h3>
            <hr className="border-gray-600" />
            <div className='flex items-center gap-2 cursor-pointer'>
              <FaRegUser />
              <span className='font-bold'>Account</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
