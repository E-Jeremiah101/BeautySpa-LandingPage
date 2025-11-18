import React from 'react'
import { Link } from "react-scroll";

const HeroImage = () => {
  return (
    <div className="" class="hero">
      <div className="flex justify-center text-center align-middle">
        <div className="text-[#fff8f2] font mt-[47%] md:mt-[15%] ">
          <h1 className="text-[2.3rem] md:text-[3rem] shadow">
            Kalm's Beauty, Inspired by <br />
            Nature.
          </h1>

          <div className="mt-7">
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-white text-2xl font-extrabold rounded cursor-pointer px-8 py-4 bg-[#ffbfa3]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage