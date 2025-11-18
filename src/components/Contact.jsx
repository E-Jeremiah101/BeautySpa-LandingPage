import React from "react";
import { Element } from "react-scroll";
import { MapPin, Clock, Phone } from "lucide-react";
import {Link} from "react-scroll";
import ScrollReveal from "./ScrollReveal.jsx";

const Contact = () => {
  return (
    <ScrollReveal direction="up" delay={0.6}>
      <div className="px-7 md:px-59 bg-[#fff8f2]">
        <Element name="contact">
          <div className="flex justify-center ">
            <span className="" class="service active-service">
              Contact Us
            </span>
          </div>
        </Element>

        <div className=" ">
          <div className="">
            <div
              className="flex items-center gap-2 font-semibold text-[1rem]
          pt-7"
            >
              <MapPin size={23} />
              <span>
                29, Jaden Avenue Rd, San Jose, California, United States
              </span>
            </div>

            <div className="flex items-center font-semibold gap-2 text-[1rem] mt-4">
              <Clock size={21} />
              <span>Mon-Fri 10am-5pm, Sat 1pm-5pm</span>
            </div>

            <div className="flex items-center font-semibold gap-2 text-[1rem] mt-4">
              <Phone size={21} />
              <span>+234-9022-91442</span>
            </div>
          </div>

          <form action="" className="mt-13">
            <div>
              <div>
                <input
                  type="text"
                  className="border rounded p-2 w-full placeholder-white text-[1.2rem] bg-black/90 text-white h-12"
                  placeholder="Name"
                />
              </div>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  className=" border rounded text-[1.2rem] p-2 w-full placeholder-white bg-black/90 text-white h-12 "
                />
              </div>
              <div className="mt-2">
                <textarea
                  name=""
                  className=" p-2 rounded border w-full h-40 text-[1.2rem] placeholder-white bg-black/90 text-white "
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-center mt-3">
                <button className="border w-full rounded placeholder-white text-[1.3rem] font-bold bg-[#ffbfa3] shadow text-white h-12">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="pt-20">
          <div className=" flex justify-between md:gap-4 cursor-pointer md:justify-normal ">
            <Link to="services" smooth={true} duration={500}>
              <span>HOME</span>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <span>ABOUT</span>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <span>SERVICE</span>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <span>TESTIMONIALS</span>
            </Link>
            <Link to="services" smooth={true} duration={500}>
              <span>CONTACT</span>
            </Link>
          </div>

          <div className="pt-15">
            <h2 className="">Kalm's Beauty</h2>
            <span className="block pb-3">
              Copyright © {new Date().getFullYear()} All rights reserved
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Contact;
