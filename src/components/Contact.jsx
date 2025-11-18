import React from "react";
import { Element } from "react-scroll";
import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  return (
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
          {/* <h2 className="text-[1.2rem] font-semibold">
            Relax and rejuvenate in our calm and opulent sanctuary.
          </h2> */}

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
                className="border rounded p-2 w-[100%] placeholder-white text-[1.3rem] bg-black/90 text-white h-12"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className=" mt-6 p-2 border rounded text-[1.3rem] p-2 w-[100%] placeholder-white bg-black/90 text-white h-12 "
              />
            </div>
            <div>
              <textarea
                name=""
                className="mt-6 p-2 rounded border w-[100%] h-40 text-[1.3rem] placeholder-white bg-black/90 text-white "
                id=""
                placeholder="Message"
              ></textarea>
            </div>
            <div className="text-center mt-3">
              <button className="border w-[100%] rounded placeholder-white text-[1.3rem] font-bold bg-[#ffbfa3] shadow text-white h-12">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
