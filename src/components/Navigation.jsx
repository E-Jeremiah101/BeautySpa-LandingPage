import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../assets/images/logospa.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto py-2 fixed flex justify-between z-20 items-center px-4 bg-[#fff8f2]">
      <div className="w-17 font-bold"><img src={logo} alt="" className="rounded-2xl " /></div>

      {/* Desktop Menu */}
      <ul className=" hidden md:flex space-x-6 text-black">
        <li>
          <Link
            className="block font-bold text-black no-underline cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="block font-bold text-black no-underline cursor-pointer"
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="block text-black no-underline font-bold cursor-pointer "
            to="services"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="block text-black no-underline font-bold cursor-pointer"
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
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
        <div className="top-23  left-5 absolute right-5 rounded-[50px] bg-[#fff8f2]  shadow-lg py-4 md:hidden z-10 text-black">
          {/* <div
            className="mb-5 mt-2"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu />}
          </div> */}
          <ul className="  text-black font-semibold gap-6 flex text-[1.3rem] p-0 m-0 justify-center">
            <li className="">
              <Link
                className="block text-black no-underline cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block text-black no-underline cursor-pointer"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="block text-black no-underline cursor-pointer"
                to="services"
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="block text-black no-underline cursor-pointer"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
