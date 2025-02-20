// src/components/common/Navbar.tsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/" className='text-4xl'>BuildXC</Link>
        </div>
        <div className="hidden md:flex space-x-4 gap-6 items-center">
          <Link href="/services" className="text-gray-600 hover:text-gray-800 uppercase">Services</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 uppercase">About</Link>
          <Link href="/resources" className="text-gray-600 hover:text-gray-800 uppercase">Resources</Link>
          <Link href="/contact" className="bg-black text-white px-4 py-2 uppercase">Contact us</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-600 focus:outline-none">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-2 px-4 py-2 uppercase">
            <Link href="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-800">Resources</Link>
            <Link href="/contact" className="bg-black text-white px-4 py-2">Contact us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;