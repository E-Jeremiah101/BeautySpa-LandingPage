import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto py-4 flex justify-between items-center px-4 bg-[#fff8f2]">
      <h1 className="text-xl font-bold">MyLogo</h1>

      {/* Desktop Menu */}
      <ul className=" hidden md:flex space-x-6 text-black">
        <li>
          <Link className="block text-black no-underline">Home</Link>
        </li>
        <li>
          <Link className="block text-black no-underline">About</Link>
        </li>
        <li>
          <Link className="block text-black no-underline">Services</Link>
        </li>
        <li>
          <Link className="block text-black no-underline">Contact</Link>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-0 bottom-100 left-0 right-0 bg-[#fff8f2]  shadow-lg p-4 md:hidden z-10 text-black">
          <div className="mb-5 mt-2" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            {isOpen ? <X  size={32}/> : <Menu />}
          </div>
          <ul className=" space-y-10 text-black font-semibold text-[1.3rem]">
            <li className=" space-y-10">
              <Link className="block text-black no-underline">Home</Link>
            </li>
            <li>
              <Link className="block text-black no-underline">About</Link>
            </li>
            <li>
              <Link className="block text-black no-underline">Services</Link>
            </li>
            <li>
              <Link className="block text-black no-underline">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
