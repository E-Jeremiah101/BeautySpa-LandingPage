import React from "react";
import Rooming from "../assets/images/face-cream.jpg";
import Mind from "../assets/images/Mindful-Relaxing.jpg";
import Cream from "../assets/images/Cream-hand.jpg";
import girlback from "../assets/images/back-treat.jpg";

const About = () => {
  return (
    <>
      <div className="px-7 md:px-59">
        <div className="flex justify-center ">
          <span className="" class="service active-service">
            About Us
          </span>
        </div>

        <div
          className="flex  md:flex-1 md:flex-row flex-col gap-10 mt-10
      "
        >
          <div className="md:flex-1 w-fit">
            <img src={girlback} alt="" className="rounded-2xl" />
          </div>

          <div className="flex-1">
            <h2 className="font-bold mb-10" class="about-sub">
              Beauty Is About Being Confortable In Your Own Skin
            </h2>
            <p className="text-gray-700">
              At our spa, we believe in providing a sanctuary where tranquility
              and luxury meet. With a team of skilled practitioners and a serene
              atmosphere, we cater to your relaxation and wellness needs. Our
              services are designed to rejuvenate your body and mind, leaving
              you refreshed and revitalized
            </p>

            <div className="mt-10">
              <button className="text-white text-2xl  px-8 py-4 bg-[#ffbfa3]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-18 md:mt-30">
        <div class="img-bg flex items-center md:px-10 ">
          <div className="bg-white/50 md:h-[65vh] h-full w-full md:w-150 md:block flex md:pl-10 md:py-5 items-center justify-center">
            <div className="md:w-100">
              <h2 className="mb-10 " class="about-sub2 service active-service">
                Ultimate Pampering Package
              </h2>
              
              <span className="pt-5 block">Immerse yourself in a journey of pure indulgence</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
