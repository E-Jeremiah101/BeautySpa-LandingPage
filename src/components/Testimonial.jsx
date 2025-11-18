import { useState, useEffect,useRef } from "react";
import Rooming from "../assets/images/review1.jpg";
import Mind from "../assets/images/review2.jpg";
import Cream from "../assets/images/review3.jpg";
import girlback from "../assets/images/African-beauty.jpg";
import girls from "../assets/images/review4.jpg";

const slides = [
  {
    url: Mind,
    title: "A Transformative Experience",
    description:
      "I left the spa feeling rejuvenated and revitalized. The massage was heavenly, and the staff was incredibly attentive.",
      mode: "Frequent time visitor"
  },
  {
    url: girlback,
    title: "Unparalleled Service",
    description:
      "The service at Spa is unmatched. From the moment I walked in, I felt welcomed and pampered. Highly recommend!",
      mode: "Second-time guest"
  },
  {
    url: Cream,
    title: "A Serene Retreat",
    description:
      "This spa is my go-to refuge. The tranquil atmosphere and skilled therapists make every visit a delightful escape.",
      mode: "Frequent time visitor"
  },
  {
    url: girls,
    title: "Good Customer Service",
    description:
      "The spa was a dream come true. I left feeling so relaxed and pampered.",
      mode:"Frequent time visitor "
  },
  {
    url: Rooming,
    title: "Amazing Spa Experience!",
    description:
      "This spa completely exceeded my expectations. The ambiance was calming, the staff was incredibly professional.",
      mode: "First-time guest"
  },
];


const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);

  // Duplicate slides for smooth infinite scroll
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === slides.length) {
      // when reaching last original slide, reset instantly to 0
      setTimeout(() => {
        sliderRef.current.style.transition = "none"; // no animation
        setCurrent(0);
      }, 1000); // same duration as your animation

      // enable animation again
      setTimeout(() => {
        sliderRef.current.style.transition =
          "transform 1000ms ease-in-out";
      }, 1100);
    }
  }, [current]);
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <span className="" class="service active-service">
          About Us
        </span>
      </div>
      <div className="relative overflow-hidden flex align-middle justify-center ">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-[1000ms] "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center text-center px-6 py-10"
            >
              {/* Image */}
              <img
                src={slide.url}
                alt={slide.title}
                className="w-35 h-35 rounded-full object-cover mb-5 shadow-md"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {slide.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 max-w-xl leading-relaxed px-25">
                {slide.description}
              </p>

              {/* Optional: Reviewer Name */}
              <p className="mt-4 font-medium text-gray-800">
                ~ {slide.mode}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonial