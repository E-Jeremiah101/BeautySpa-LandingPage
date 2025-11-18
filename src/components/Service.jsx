import { Element } from "react-scroll";
import Rooming from "../assets/images/face-cream.jpg";
import Mind from "../assets/images/Mindful-Relaxing.jpg";
import Cream from "../assets/images/Cream-hand.jpg";
import girlback from "../assets/images/back-treat.jpg";

const Service = () => {
  return (
    
    <div className=" mt-10 px-7 md:px-59 mb-17">
      <Element name="services">
      <div className="flex justify-center ">
        <span className="text-[2.6rem]" class="service active-service">
          Services
        </span>
      </div>
      </Element>

      <div className="flex justify-center">
        <div className=" md:w-fit  grid md:grid-cols-3 md:gap-4 gap-8  object-cover mt-3">
          <div className="md:w-63 w-97">
            <img src={Cream} alt="" className="h-65 w-97 md:w-63 rounded-xl " />
            <h2 className="font-bold" class="sub-head">
              Manicure & Pedicure
            </h2>
            <span className="text-gray-700 text-sm leading-4 block">
              Indulge in the ultimate hand and foot care for perfectly polished
              nails.
            </span>
          </div>
          <div className="md:w-63 w-97">
            <img
              src={Rooming}
              alt=""
              className="h-65 w-97 md:w-63 rounded-xl object-cover"
            />
            <h2 className="font-bold " class="sub-head">
              Facial Treatment
            </h2>
            <span className="text-gray-700 text-sm leading-4 block">
              Revitalize your skin with our customized facial therapies designed
              to nourish and rejuvenate.
            </span>
          </div>
          <div className="md:w-63 w-97">
            <img
              src={Mind}
              alt=""
              className="h-65  w-97 md:w-63 rounded-xl object-cover "
            />
            <h2 className="font-bold " class="sub-head">
              Aromatherapy Massage
            </h2>
            <span className="text-gray-700 text-sm leading-4 block">
              Experience the therapeutic effects of essential oils combined with
              soothing massage techniques
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
